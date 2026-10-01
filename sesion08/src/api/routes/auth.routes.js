import { Router } from "express"
import { login } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validation.js"
import { loginSchema } from "../schemas/auth.schema.js"

const authRouter = Router()

authRouter.post("/login", validate(loginSchema), login)

//authRouter.post("/registro", guardarProductoEnCarrito)

export default authRouter