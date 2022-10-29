import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IAppProvider {
    children: ReactNode;
}

export function AppProvider ({children} : IAppProvider) {
    return ( 
        <ChakraProvider>
            <ToastContainer />{children}</ChakraProvider>
     );
}