import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Cart = sequelize.define(
    "Cart",
    {
    },
    {
        tableName: "carts",
        timestamps: true,
    }
)