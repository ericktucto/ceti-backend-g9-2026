import express from "express"
import dotenv from "dotenv"
import { home } from "./api/controllers/home.controller.js"
import apiRouter from "./api/routes/index.routes.js"
import { conectarDB, sequelize } from "./api/config/database.js"
import { Cliente } from "./api/models/cliente.model.js"

dotenv.config()

const app = express()

/*
app.use((req, res, next) => {
    console.log("LOGGED")
    next()
})
*/

app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', home)
app.use('/api', apiRouter)

async function iniciarServidor() {

    await conectarDB()

    await sequelize.sync({ alter: true })

    await Cliente.bulkCreate([
        { nombre: "Erick Tucto", email: "erick@ericktucto.com" }
    ])

    app.listen(port, () => {
        console.log(`Servidor funcionando. Visita http://localhost:${port}`)
    })
}
iniciarServidor()
