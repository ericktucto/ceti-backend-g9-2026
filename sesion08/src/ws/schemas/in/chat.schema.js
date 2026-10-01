import Joi from 'joi'

export const MessageSchema = Joi.object({
    room: Joi.string().min(3).max(50).required(),
    username: Joi.string().min(3).max(50).required(),
    text: Joi.string().required()
})