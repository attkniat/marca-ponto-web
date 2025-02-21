import { useQueryClient } from '@tanstack/react-query';

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

interface IAuthContextProviderProps {
    children: ReactNode;
}

type IAuthContext = {
    isLogged: boolean,
    signIn: (token: string) => void;
    signOut: () => void;
};

const AuthContext = createContext({} as IAuthContext)

export function useAuthContext() {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }

    return context;
}

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
    const [isLogged, setIsLogged] = useState<boolean>(
        () => !!localStorage.getItem('jwtToken'),
    );

    const queryClient = useQueryClient();

    const signIn = useCallback((token: string) => {
        localStorage.setItem('jwtToken', token);
        setIsLogged(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('jwtToken');
        queryClient.removeQueries();
        setIsLogged(false);
    }, [queryClient]);

    const value = useMemo(
        () => ({
            isLogged,
            signIn,
            signOut,
        }),
        [isLogged, signIn, signOut],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
