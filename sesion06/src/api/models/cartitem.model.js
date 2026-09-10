import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const CartItem = sequelize.define(
    "CartItem",
    {
        cantidad: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1
            }
        }
    },
    {
        tableName: "cartitems",
        timestamps: true,
    }
)