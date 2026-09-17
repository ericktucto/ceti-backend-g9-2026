import { Producto } from "../models/producto.model.js"


export async function listarProductos(req, res) {
    const productos = await Producto.findAll();
    res.json({
        productos
    })
}

// un usuario logueado, esa vendedor
export async function crearProducto() {

}