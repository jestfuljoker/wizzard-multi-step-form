import { z } from 'zod';

export const addressStepSchema = z.object({
	state: z.string().min(1, 'Informe o seu estado'),
	city: z.string().min(1, 'Informe a sua cidade'),
	street: z.string().min(1, 'Informe o seu endereço'),
});
