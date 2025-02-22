import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from 'axios';
import { api } from "../../shared/lib/api";
import { routes } from "../../shared/routes/routes";
import { useAuthContext } from "../contexts/auth";
import { toast } from "react-toastify";
import { LoginSchema } from "../schemas";
import { CustomerResponse } from "../types";
import { useNavigate } from "react-router-dom";

type ILoginAPIResponse = {

    user: {
        email: string,
    };

    token: string;
};

async function setDataLocalStorage() {

    const dataCustomer = await api.get<CustomerResponse>(routes.user.children.customer.route);

    localStorage.setItem('customerId', dataCustomer.data.id);
    localStorage.setItem('customerName', dataCustomer.data.name);
    localStorage.setItem('customerCPF', dataCustomer.data.cpf);
    localStorage.setItem('customerEmail', dataCustomer.data.email);
    localStorage.setItem('customerRole', dataCustomer.data.role);
}

async function login(payload: LoginSchema) {
    const { data } = await api.post<ILoginAPIResponse>(routes.auth.children.login.route, payload);

    localStorage.setItem('jwtToken', data.token);
    await setDataLocalStorage();

    return data;
}

export function useLoginMutation() {

    const navigate = useNavigate();
    const { signIn } = useAuthContext();

    return useMutation({
        mutationFn: login,
        onSuccess: ({ token }) => {
            signIn(token);
            toast.success('Seja bem vindo!');
            navigate('/');
        },
        onError: error => {
            let errorMessage = 'Erro desconhecido. Por favor, tente novamente mais tarde.';

            if (isAxiosError(error)) {

                if (error.response?.status === 404) {
                    errorMessage = 'Usuário ou senha inválidos.';
                } else {
                    errorMessage =
                        typeof error.response?.data.message === 'string'
                            ? error.response?.data.message
                            : 'Erro durante a requisição. Por favor, tente novamente mais tarde.';
                }
            }
            toast.error(errorMessage);
        },
    });
}