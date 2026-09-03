import { Router } from "express"
import cartRoutes from "./cart.routes.js"
import productoRouter from "./productos.routes.js"

const apiRouter = Router()

apiRouter.use("/cart", cartRoutes)
apiRouter.use("/productos", productoRouter)

export default apiRouter
