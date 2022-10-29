import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IAppProvider {
    children: ReactNode;
}

export function AppProvider ({children} : IAppProvider) {
    return ( 
        <ChakraProvider>{children}</ChakraProvider>
     );
}