import { Router } from "express"
import cartRoutes from "./cart.routes.js"
import productoRouter from "./productos.routes.js"
import authRouter from "./auth.routes.js"

const apiRouter = Router()

apiRouter.use("/auth", authRouter)
apiRouter.use("/cart", cartRoutes)
apiRouter.use("/productos", productoRouter)

export default apiRouter
