import { BaseController } from "./base.controller.js";

export class ConnectionController extends BaseController {
    login(data) {
        this.socket.join(data.room)
        this.socket.to(data.room).emit("new-user", {
            id: this.socket.id,
            username: data.username,
        })
    }
    leave() {
        this.socket.disconnect()
    }

    routes() {
        this.socket.on('join', this.login.bind(this))
        this.socket.on('leave', this.leave.bind(this))
    }
}