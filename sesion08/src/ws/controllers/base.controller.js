export class BaseController {
    constructor(io, socket) {
        this.io = io
        this.socket = socket
    }

    routes() {
        throw new Error("No implementaste el metodo routes");
    }
}