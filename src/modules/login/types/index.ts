export type LoginApiResponse = {

    user: {
        email: string;
    };

    token: string;
    message: string;
};