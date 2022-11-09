import { Box, Flex, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { IoPartlySunnySharp, IoSunnySharp } from "react-icons/io5";

export function PontosDiaGrid() {

    return <SimpleGrid gap='18px' row={2}>
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
    </SimpleGrid>;
}