import { BaseController } from "./base.controller.js";

export class TypingController extends BaseController {
    typing(data) {
        this.socket.to(data.room).emit("typing", {
            id: this.socket.id,
            name: data.name,
            typing: data.typing,
        })
    }

    routes() {
        this.socket.on('typing', this.typing.bind(this))
    }
}