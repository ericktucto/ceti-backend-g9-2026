import express from "express"
import dotenv from "dotenv"
import { home } from "./api/controllers/home.controller.js"
import apiRouter from "./api/routes/index.routes.js"
import { conectarDB } from "./api/config/database.js"
import { database } from "./api/models/index.js"

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

    await database.sequelize.sync({ alter: true })

    app.listen(port, () => {
        console.log(`Servidor funcionando. Visita http://localhost:${port}`)
    })
}
iniciarServidor()
