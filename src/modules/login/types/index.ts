export type LoginApiResponse = {

    user: {
        email: string;
    };

    token: string;
    message: string;
};

export type CustomerResponse = {

    id: string;
    name : string;
    cpf: string;
    email: string;
    role: string;
};