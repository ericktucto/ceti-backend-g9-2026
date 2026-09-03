import { Router } from "express"
import clienteRoutes from "./cliente.routes.js"

const apiRouter = Router()

apiRouter.use("/clientes", clienteRoutes)

export default apiRouter
