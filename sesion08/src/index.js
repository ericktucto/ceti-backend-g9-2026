import express from "express"
import dotenv from "dotenv"
import http from "http"
import { Server as ServerIO } from "socket.io"
import { home } from "./api/controllers/home.controller.js"
import apiRouter from "./api/routes/index.routes.js"
import { conectarDB } from "./api/config/database.js"
import { database } from "./api/models/index.js"
import controllersWS from "./ws/controllers/index.js"
import authMiddleware from "./ws/middlewares/auth.middleware.js"

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new ServerIO(server)

/*
app.use((req, res, next) => {
    console.log("LOGGED")
    next()
})
*/

app.use(express.json())
app.use(express.static('public'))

const port = process.env.PORT || 3000

// API REST
app.get('/home', home)
app.use('/api', apiRouter)

// WEBSOCKETS
io.use(authMiddleware)
io.on("connection", (socket) => {
    controllersWS.forEach(controller => {
        const c = new controller(io, socket)
        c.routes()
    })
})

async function iniciarServidor() {

    await conectarDB()

    await database.sequelize.sync({ alter: true })

    server.listen(port, () => {
        console.log(`Servidor funcionando. Visita http://localhost:${port}`)
    })
    /*
    app.listen(port, () => {
        console.log(`Servidor funcionando. Visita http://localhost:${port}`)
    })
    */
}
iniciarServidor()
