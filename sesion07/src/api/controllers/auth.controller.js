import { database } from '../models/index.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../../services/jwt.js'

const { sequelize, Cliente } = database

export async function login(req, res) {
    const { email, password } = req.body

    const cliente = await Cliente.findOne({
        where: { email }
    })

    if (!cliente) {
        return res.status(400).json({
            errores: [
                "Las credenciales son incorrectas",
            ]
        })
    }

    const check = await bcrypt.compare(password, cliente.password);

    if (!check) {
        return res.status(400).json({
            errores: [
                "Las credenciales son incorrectas",
            ]
        })
    }

    const token = await generateToken({ clienteId: cliente.id })

    res.json({
        cliente: {
            id: cliente.id,
            nombre: cliente.nombre,
            email: cliente.email
        },
        token
    })
}
