import { BaseController } from "./base.controller.js";
import { MessageSchema } from "../schemas/in/chat.schema.js";

export class ChatController extends BaseController {
    message(data) {
        const result = MessageSchema.validate(data)
        if (result.error) {
            return this.socket.emit("error", {
                errors: result.error.details.map(d => d.message)
            })
        }
        const { room, text, username } = result.value

        this.socket.to(room).emit("message", {
            id: this.socket.id,
            room,
            username,
            text
        })
    }

    routes() {
        this.socket.on('message', this.message.bind(this))
    }
}