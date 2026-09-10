import Joi from 'joi'

export const guardarProductoSchema = Joi.object({
    productoId: Joi.number().greater(0).required().messages({
        "number.base": "El id de producto debe ser mayor a 0",
        "number.greater": "El id de producto debe ser mayor a 0",
        "any.required": "El id de producto es requerido"
    }),
    cantidad: Joi.number().greater(0).default(1)
})