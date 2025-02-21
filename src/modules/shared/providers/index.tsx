import { ComponentProps, ComponentType, FC, PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from "../../login/contexts/auth";

type IProvider = [ComponentType<any>, ComponentProps<any>?];

const combineProviders = (providers: IProvider[]): FC<PropsWithChildren> =>
    providers.reduce(
        (AccumulatedProviders, [Provider, props = {}]) =>
            ({ children }) => (
                <AccumulatedProviders>
                    <Provider {...props}>
                        <>{children}</>
                    </Provider>
                </AccumulatedProviders>
            ),
        ({ children }) => <>{children}</>,
    );

export const Providers = combineProviders([
    [ChakraProvider],
    [ToastContainer],
    [AuthContextProvider],
]);