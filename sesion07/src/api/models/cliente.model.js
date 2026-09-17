import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from 'bcrypt'

export const Cliente = sequelize.define(
    "Cliente",
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value, 10));
            }
        }
    },
    {
        tableName: "clientes",
        timestamps: true,
    }
)