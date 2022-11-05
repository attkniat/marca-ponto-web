import { Box, Button, Flex, SimpleGrid, Heading, Icon, Text, useDisclosure, ModalOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { IoPartlySunnySharp, IoSunnySharp, IoTimeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api } from "../../shared/lib/api";
import { toast } from 'react-toastify';

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
                    <Button width="400px" height="50px" type="button" onClick={onOpen} colorScheme='purple'>Marcar</Button>

                    <Flex mb="12px" align='center' gap='4px' justify="center">
                        <Icon as={IoTimeSharp} />
                        <Text fontSize='md'> {formatedDate}</Text>
                    </Flex>
                    <Heading size="md" textAlign="center">Seus Pontos do Dia</Heading>

                    <SimpleGrid gap='18px' row={2} >
                        <Box py="16px" px="24px" bgColor='purple.200' borderRadius='10px' width='400px'>
                            <Flex align='center' gap='4px'>
                                <Icon as={IoSunnySharp} />
                                <Text as='b' color='purple.250' fontSize='md'> Entrada</Text>
                            </Flex>
                            <Text ml="20px" mt="4px" color='purple.250' fontSize='md'>08:00</Text>
                        </Box>
                        <Box py="16px" px="24px" bgColor='purple.200' borderRadius='10px' width='400px'>
                            <Flex align='center' gap='4px'>
                                <Icon as={IoPartlySunnySharp} />
                                <Text as='b' color='purple.250' fontSize='md'> Saída</Text>
                            </Flex>
                            <Text ml="20px" mt="4px" color='purple.250' fontSize='md'>12:00</Text>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirmar Ponto Agora?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text> Confirmarçaõ de Dados</ Text>
                        <Text> Nathan Soares Oliveira</ Text>
                        <Text> CLT</ Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} disabled={loading} onClick={onClose}>
                            Fechar
                        </Button>
                        <Button variant='ghost' onClick={handleConfirm} isLoading={loading}>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
};