import { z } from 'zod';

export const registerSchema = z.object({
    nombre_usuario: z
        .string({
            required_error: 'El nombre de usuario es requerido',
            invalid_type_error: 'El nombre de usuario debe ser Texto'
        }),

    contrasena: z
        .string({
            required_error: 'La contraseña es requerida',
            invalid_type_error: 'La contraseña debe ser Texto'
        })
        .min(6, { message: 'La contraseña debe ser minimo de 6 caracteres' })
        .max(100, { message: 'La contraseña debe ser maximo de 100 caracteres' })
});


export const loginSchema = z.object({
    nombre_usuario: z
        .string({
            required_error: 'El nombre de usuario es requerido',
            invalid_type_error: 'El nombre de usuario debe ser Texto'
        }),

    contrasena: z
        .string({
            required_error: 'La contraseña es requerida',
            invalid_type_error: 'La contraseña debe ser Texto'
        })
});