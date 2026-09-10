import { database } from '../models/index.js'
import * as jose from 'jose'

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
        const secret = new TextEncoder().encode(process.env.JWT_SECRET,)
        const token = header.split(" ")[1];
        const { payload } = await jose.jwtVerify(token, secret);

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