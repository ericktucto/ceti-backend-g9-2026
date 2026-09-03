import { Router } from "express"
import { actualizarProductoDentroDelCarrito, guardarProductoEnCarrito, quitarProductoDelCarrito, verCarrito } from "../controllers/cart.controller.js"

const carRouter = Router()

carRouter.get("/", verCarrito)

carRouter.post("/items", guardarProductoEnCarrito)

carRouter.put("/items/:id", actualizarProductoDentroDelCarrito)

carRouter.delete("/items/:id", quitarProductoDelCarrito)

export default carRouter