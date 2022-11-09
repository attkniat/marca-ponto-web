import { Box, Button, Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { IoTimeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api } from "../../shared/lib/api";
import { toast } from 'react-toastify';
import { ModalPontoConfirmar } from "./ModalPontoConfirmar";
import { PontosDiaGrid } from "./PontosDiaGrid";

export function HomePage() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [loading, setLoading] = useState(false);
    const [dateNow, setDateNow] = useState<Date>(() => new Date());

    const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
        timeStyle: 'medium'
    }).format(dateNow);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDateNow(new Date());
        }, 1000
        )
        return () => clearTimeout(timeOut)
    }, [dateNow])

    async function handleConfirm() {

        try {
            setLoading(true)

            await api.post('/marcar-ponto-async')

            toast.success('Ponto Marcado!', {
                position: "top-center",
                autoClose: 2000,
            });

            onClose();
        } catch (error) {

            toast.error('Falha ao Marcar Ponto !', {
                position: "top-center",
                autoClose: 2000,
            });
        } finally {
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
                <Heading size="md" textAlign="center">Marque seu Ponto</Heading>
                <Flex direction="column" gap="16px" mt="32px">
                    <Button
                        width="400px"
                        height="50px"
                        type="button"
                        onClick={onOpen}
                        colorScheme='purple'
                    >
                        Marcar
                    </Button>

                    <Flex mb="12px" align='center' gap='4px' justify="center">
                        <Icon as={IoTimeSharp} />
                        <Text fontSize='md'> {formatedDate}</Text>
                    </Flex>
                    <Heading size="md" textAlign="center">Seus Pontos do Dia</Heading>

                    {PontosDiaGrid()}
                </Flex>
            </Box>
            {ModalPontoConfirmar(isOpen, onClose, formatedDate, handleConfirm, loading)}
        </Flex>
    )
};
