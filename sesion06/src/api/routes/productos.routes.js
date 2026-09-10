import { Router } from "express"
import { listarProductos } from "../controllers/producto.controller.js"

const productoRouter = Router()

productoRouter.get("/", listarProductos)

export default productoRouter