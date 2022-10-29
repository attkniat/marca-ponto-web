import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../shared/lib/api";
import { toast } from 'react-toastify';

export function LoginPage() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event : ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target

        if(name === "email") {
            setEmail(value)
        } else if(name === "password") {
            setPassword(value)
        }
    }

    async function handleSubmit (event : FormEvent) {
        event.preventDefault();

        const data = {email, password};
        setLoading(true)

        try {
            
            //await api.post("/login", data)

            toast.success('Bem-Vindo!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
        } catch (error) {

            toast.error('Falha no Login !', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                console.log(error);
            
        } finally{
            setLoading(false)
        }
    }

    return (
        <Flex 
            as="main"
            width="100%"
            height="100vh" 
            direction="column"
            align="center"
            justify="center"
            bg="gray.200"
        >
            <Box maxWidth="600px" p="24px" bg="white" borderRadius="6px">
                <Heading size="lg" textAlign="center">Marca Ponto</Heading>
                    <Flex direction="column" gap="16px" mt="32px" as="form" onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <Input name="email" type="email" onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <FormLabel> 
                                Senha
                            </FormLabel>
                            <Input name="password" type="password" onChange={handleChange} />
                        </FormControl>

                        <Button 
                            px="200px"
                            type="submit"
                            colorScheme="blue"
                            isLoading={loading}
                        >
                            Login
                        </Button>
                    </Flex>
            </Box>
        </Flex>
    )
};