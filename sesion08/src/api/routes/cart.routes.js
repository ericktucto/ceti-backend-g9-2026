import { Router } from "express"
import { actualizarProductoDentroDelCarrito, guardarProductoEnCarrito, quitarProductoDelCarrito, verCarrito } from "../controllers/cart.controller.js"
import { guardarProductoSchema } from "../schemas/carrito.schema.js"
import { validate } from "../middlewares/validation.js"
import { autenticar } from "../middlewares/auth.middleware.js"

const carRouter = Router()

carRouter.get("/", autenticar, verCarrito)

carRouter.post("/items", autenticar, validate(guardarProductoSchema), guardarProductoEnCarrito)

carRouter.put("/items/:id", autenticar, actualizarProductoDentroDelCarrito)

carRouter.delete("/items/:id", autenticar, quitarProductoDelCarrito)

export default carRouter