import { useForm } from 'react-hook-form';
import { loginschema, LoginSchema } from "../schemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from "../hooks";
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export function LoginPage() {

    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<LoginSchema>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginschema),
    });

    const { mutate, isPending } = useLoginMutation();

    function onSubmit(args: LoginSchema) {
        mutate(args);
    }

    return (
        <Flex
            as="form"
            width="100%"
            height="100vh"
            direction="column"
            align="center"
            justify="center"
            bg="gray.200"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box maxWidth="600px" p="24px" bg="white" borderRadius="6px">
                <Heading size="lg" textAlign="center">Marca Ponto</Heading>
                <Flex direction="column" gap="16px" mt="32px">
                    <FormControl>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <Input type="email" {...register('email')} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            Senha
                        </FormLabel>
                        <Input {...register('password')} />
                    </FormControl>
                    <Button
                        px="200px"
                        type="submit"
                        colorScheme="blue"
                        isLoading={isPending}
                    >
                        Login
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
};