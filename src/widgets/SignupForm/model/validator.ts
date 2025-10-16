import { z } from 'zod';

export const validationSchema = z
    .object({
        username: z.string().min(1, 'Username Is Required'),
        email: z
            .email()
            .min(1, 'Email Is Required')
            .includes('@', { error: 'Email Must Have @ Symbol' }),
        password: z
            .string()
            .min(1, 'Password Is Required')
            .min(6, 'Password Must Have At Least 6 Symbols'),
        passwordConfirm: z.string().min(1, 'Confirm Your Password'),
        socialNetworkLinks: z
            .array(
                z.object({
                    value: z.url().min(1, 'Social Network Link Is Required'),
                })
            )
            .min(1, 'Add At Least One Social Network Link'),
    })
    .superRefine((val, ctx) => {
        if (val.password !== val.passwordConfirm) {
            ctx.addIssue({
                code: 'custom',
                path: ['passwordConfirm'],
                message: 'Passwrods are not the same',
            });
        }
    });
