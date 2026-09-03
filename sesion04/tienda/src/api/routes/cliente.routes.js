import { Router } from "express"
import { listarCliente } from "../controllers/client.controller.js"

const clienteRouter = Router()

clienteRouter.get("/", listarCliente)

export default clienteRouter