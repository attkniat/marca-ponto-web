import { Box, Flex, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoPartlySunnySharp, IoSunnySharp } from "react-icons/io5";
import { api } from "../../shared/lib/api";

export function PontosDiaGrid() {

    const [dataPonto, setDataPonto] = useState(null);
    const [dataPonto2, setDataPonto2] = useState(null);

    useEffect(() => {

        api.get('/get-all-pontos-by-userId-async')
            .then( resp => {
                setDataPonto(resp.data[0].dataCadastro);
                setDataPonto2(resp.data[1].dataCadastro);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return <SimpleGrid gap='18px' row={2}>
        <Box py="16px" px="24px" bgColor='purple.200' borderRadius='10px' width='400px'>
            <Flex align='center' gap='4px'>
                <Icon as={IoSunnySharp} />
                <Text as='b' color='purple.250' fontSize='md'> Entrada</Text>
            </Flex>
            <Text ml="20px" mt="4px" color='purple.250' fontSize='md'>{dataPonto}</Text>
        </Box>
        <Box py="16px" px="24px" bgColor='purple.200' borderRadius='10px' width='400px'>
            <Flex align='center' gap='4px'>
                <Icon as={IoPartlySunnySharp} />
                <Text as='b' color='purple.250' fontSize='md'> Saída</Text>
            </Flex>
            <Text ml="20px" mt="4px" color='purple.250' fontSize='md'>{dataPonto2}</Text>
        </Box>
    </SimpleGrid>;
}