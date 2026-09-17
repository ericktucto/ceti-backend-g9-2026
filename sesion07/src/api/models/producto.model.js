import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Producto = sequelize.define(
    "Producto",
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
            },
        },
        titulo: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.nombre} - S/ ${this.precio / 100}`
            }
        },
    },
    {
        tableName: "productos",
        timestamps: true,
    }
)