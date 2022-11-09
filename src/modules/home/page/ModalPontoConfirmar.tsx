import { Button, Flex, SimpleGrid, Icon, Text, ModalOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { IoTimeSharp, IoPersonSharp, IoIdCard, IoMail } from "react-icons/io5";

export function ModalPontoConfirmar(isOpen: boolean, onClose: () => void, formatedDate: string, handleConfirm: () => Promise<void>, loading: boolean) {
    
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
            bg=''
            backdropFilter='auto'
            backdropInvert='4%'
            backdropBlur='2px' />
        <ModalContent>
            <ModalHeader as="b" color='purple.250' alignSelf="center">Confirmar Ponto Agora?</ModalHeader>
            <ModalCloseButton />
            <ModalBody m='16px'>
                <SimpleGrid gap='14px' row={2}>
                    <Text as='b'> Dados Pessoais</Text>
                    <Flex gap='4px'>
                        <Icon as={IoPersonSharp}></Icon>
                        <Text> Nome</Text>
                    </Flex>
                    <Flex gap='4px'>
                        <Icon as={IoIdCard}></Icon>
                        <Text> CPF</Text>
                    </Flex>
                    <Flex gap='4px'>
                        <Icon as={IoMail}></Icon>
                        <Text> Email</Text>
                    </Flex>
                    <Text as='b'> Horário</Text>
                    <Flex gap='4px'>
                        <Icon as={IoTimeSharp} />
                        <Text fontSize='md'> {formatedDate}</Text>
                    </Flex>
                </SimpleGrid>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant='ghost'
                    onClick={handleConfirm} isLoading={loading}
                >
                    Confirmar
                </Button>
                <Button
                    colorScheme='blue'
                    mr={3} variant='outline'
                    disabled={loading} onClick={onClose}
                >
                    Fechar
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>;
}