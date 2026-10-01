import { sequelize } from "../config/database.js";
import { Cart } from "./cart.model.js";
import { CartItem } from "./cartitem.model.js";
import { Cliente } from "./cliente.model.js";
import { Producto } from "./producto.model.js";

// Cliente -> Cart -> 1:1
Cliente.hasOne(Cart)
Cart.belongsTo(Cliente)

// Cart -> CartItem -> 1:N
Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

// CartItem -> Producto -> N:1
CartItem.belongsTo(Producto)
Producto.hasMany(CartItem)

export const database = {
    sequelize,
    Cliente,
    Producto,
    Cart,
    CartItem,
}