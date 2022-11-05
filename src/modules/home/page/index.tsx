import { Box, Button, Flex, SimpleGrid, Heading, Icon, Text} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../shared/lib/api";
import { toast } from 'react-toastify';


export function HomePage() {
    
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event : FormEvent) {
        event.preventDefault();
        setLoading(true)
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
                    
                <Flex direction="column" gap="16px" mt="32px" as="form" onSubmit={handleSubmit}>
                    <Button width="400px" height="50px" isLoading={loading} type="submit" colorScheme='purple'>Marcar</Button>
                     <Text padding="15px" fontSize='md'><Icon /> 04 de Novembro | 18:00</Text>
                     <Heading size="md" textAlign="center">Seus Pontos do Dia</Heading>
                     <br></br>
                     <SimpleGrid row={2} >
                        <Box bgColor='purple.200' borderRadius='10px' width='400px' height='80px'>
                            <Text as='b' padding="15px" color='purple.250' fontSize='md'><Icon /> Entrada</Text>
                            <Text padding="15px" color='purple.250' fontSize='md'>08:00</Text>
                        </Box>
                        <br></br>
                        <Box bgColor='purple.200' borderRadius='10px' width='400px' height='80px'>
                            <Text as='b' padding="15px" color='purple.250' fontSize='md'><Icon /> Saída</Text>
                            <Text padding="15px" color='purple.250' fontSize='md'>12:00</Text>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Box>
        </Flex>
    )
};