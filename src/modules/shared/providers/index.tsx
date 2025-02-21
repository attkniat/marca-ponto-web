import { ComponentProps, ComponentType, FC, PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../../login/contexts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    [AuthContextProvider],
    [QueryClientProvider, { client: new QueryClient() }]
]);