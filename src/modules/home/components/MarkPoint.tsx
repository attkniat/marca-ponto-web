import { Box, Button, Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { IoTimeSharp, IoLogIn } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api } from "../../shared/lib/api";
import { toast } from 'react-toastify';
import { ModalPontoConfirmar } from "./ModalPontoConfirmar";
import { PontosDiaGrid } from "./PontosDiaGrid";
import { Point, PointsApiResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { routes } from "../../shared/routes/routes";

export function MarkPoint() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [loading, setLoading] = useState(false);
    const [dateNow, setDateNow] = useState<Date>(() => new Date());
    const [points, setPoints] = useState<Point[]>([]);
    const navigate = useNavigate();

    const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
        timeStyle: 'medium'
    }).format(dateNow);

    function getPoints() {

        api.get<PointsApiResponse>('/get-all-pontos-by-userId-async')
            .then(resp => {
                setPoints(resp.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDateNow(new Date());
        }, 1000
        )
        return () => clearTimeout(timeOut)
    }, [dateNow])

    useEffect(() => {
        getPoints();
    }, [])

    async function handleConfirm() {

        try {
            setLoading(true)

            await api.post('/marcar-ponto-async')

            toast.success('Ponto Marcado!', {
                position: "top-center",
                autoClose: 2000,
            });

            onClose();
            getPoints();
        } catch (error) {

            toast.error('Falha ao Marcar Ponto !', {
                position: "top-center",
                autoClose: 2000,
            });
        } finally {
            setLoading(false)
        }
    }

    function Logout() {

        localStorage.clear();
        navigate(routes.auth.children.login.route);

        toast.success('Você saiu', {
            position: "top-center",
            autoClose: 2000,
        });
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
                <Flex justify='right' mb='20px' >
                    <Button rightIcon={<IoLogIn />} onClick={Logout} colorScheme='purple' size='lg' variant=''>Sair</Button>
                </Flex>
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

                    <PontosDiaGrid points={points} />
                </Flex>
            </Box>
            <ModalPontoConfirmar isOpen={isOpen} onClose={onClose} formatedDate={formatedDate} handleConfirm={handleConfirm} loading={loading} />
        </Flex>
    )
};