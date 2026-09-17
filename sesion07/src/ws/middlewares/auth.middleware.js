import { JwtTokenInvalid } from "../../exceptions.js";
import { verify } from "../../services/jwt.js";

export default async function(socket, next) {
    console.log("DEBUG: Intento de conexion", socket.id)
    try {
        const token = socket.handshake.auth?.token;
        console.log("DEBUG: Token", token)
        if (!token) return next(new JwtTokenInvalid("Token Invalid"))

        const payload = await verify(token)
        socket.user = payload
        console.log("DEBUG: Autenticado", socket.id)
        next()

    } catch (e) {
        next(new JwtTokenInvalid("Token Invalid"))
    }
}