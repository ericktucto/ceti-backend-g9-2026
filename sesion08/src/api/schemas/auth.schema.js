import Joi from 'joi'

export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "*": "Debes enviar un correo válido"
    }),
    password: Joi.string().min(6).required().messages({
        "*": "La contraseña es requerida"
    })
})