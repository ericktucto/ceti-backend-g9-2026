import { verify } from '../../services/jwt.js';
import { database } from '../models/index.js'

const { sequelize, Cliente } = database

export async function autenticar(req, res, next) {
    const header = req.headers.authorization;

    if (!header?.startsWith("Bearer ")) {
        return res.status(401).json({
            errores: [
                "No estas autorizado"
            ]
        })
    }

    try {
        const token = header.split(" ")[1];
        const payload = await verify(token)

        const cliente = await Cliente.findByPk(payload.clienteId)

        if (!cliente) {
            return res.status(401).json({
                errores: [
                    "No estas autorizado"
                ]
            })
        }


        req.user = cliente
        next()
    } catch (e) {
        return res.status(401).json({
            errores: [
                "No estas autorizado"
            ]
        })
    }
}