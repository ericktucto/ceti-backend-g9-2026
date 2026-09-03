import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        logging: true,
    }
)

export async function conectarDB() {
    try {
        await sequelize.authenticate();
        console.log("Conexion existosa");
    } catch (error) {
        console.log("No se pudo hacer la conexion")
        process.exit(1)
    }
}