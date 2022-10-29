import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

export function LoginPage() {
    return (
        <Flex 
            as="main"
            width="100%"
            height="100vh" 
            direction="column"
            align="center"
            justify="center"
        >
            <Box maxWidth="600px">
                <Heading size="lg" textAlign="center">Marca Ponto</Heading>
                    <Flex direction="column" gap="16px" mt="32px">
                        <Input maxWidth="500px" />
                        <Button px="200px">Login</Button>
                    </Flex>
            </Box>
        </Flex>
    )
};