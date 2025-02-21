import { z } from "zod";


export const loginschema = z.object({
    email: z.string().email('E-mail inválido').min(1, 'Campo Obrigatório'),
    password: z.string().min(1, 'Campo Obrigatório'),
});

export type LoginSchema = z.infer<typeof loginschema>;