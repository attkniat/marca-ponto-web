import { Box, Flex, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { IoPartlySunnySharp, IoSunnySharp } from "react-icons/io5";
import { Point } from "../types";

interface PontosDiaGridProps {

    points: Point[]
}

export function PontosDiaGrid({ points }: PontosDiaGridProps) {
    return (
        <SimpleGrid gap='18px' row={4}>
            {points.length > 0 ? points.map((point, index) => {
                const even = index % 2 === 0;

                return (
                    <Box py="16px" px="24px" bgColor='purple.200' borderRadius='10px' width='400px'>
                        <Flex align='center' gap='4px'>
                            <Icon as={even ? IoSunnySharp : IoPartlySunnySharp} />
                            <Text as='b' color='purple.250' fontSize='md'>{even ? 'Entrada' : 'Saída'}</Text>
                        </Flex>
                        <Text ml="20px" mt="4px" color='purple.250' fontSize='md'>{point.dataCadastro}</Text>
                    </Box>
                );
            }): (<Text ml="20px" mt="4px" color='purple.250' fontSize='md'>Não há pontos hoje</Text>)}

        </SimpleGrid>
    );
}