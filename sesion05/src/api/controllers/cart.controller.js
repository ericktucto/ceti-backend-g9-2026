import { database } from './../models/index.js'

const { sequelize, Cart, Producto, CartItem } = database

export async function verCarrito(req, res) {
    const [carrito] = await Cart.findOrCreate({
        where: { ClienteId: req.query.clienteId }
    })

    const completo = await Cart.findByPk(carrito.id, {
        include: [
            {
                association: "CartItems",
                include: [
                    {
                        association: "Producto"
                    }
                ]
            }
        ]
    })

    res.json(completo)
}

export async function guardarProductoEnCarrito(req, res) {
    const { productoId, clienteId } = req.body
    let { cantidad } = req.body

    cantidad = Number(cantidad ?? 1)

    const producto = await Producto.findByPk(productoId)
    if (!producto) {
        return res.status(404).json({
            mensaje: "El producto existe"
        })
    }

    const [carrito] = await Cart.findOrCreate({
        where: { ClienteId: clienteId }
    })

    const [item, creado] = await CartItem.findOrCreate({
        where: { CartId: carrito.id, ProductoId: productoId },
        defaults: { cantidad }
    })

    if (!creado) {
        item.cantidad = item.cantidad + cantidad
        await item.save()
    }

    res.status(creado ? 201 : 200).json(item)
}

export async function actualizarProductoDentroDelCarrito(req, res) {
    const { id } = req.params
    const { cantidad } = req.body

    try {
        const item = await CartItem.findByPk(id)
        await item.update({
            cantidad: Number(cantidad),
        })

        res.json(item)
    } catch (e) {
        console.error(e)
        res.json({
            mensaje: "No se pudo actualizar tu carrito"
        })
    }
}

export async function quitarProductoDelCarrito(req, res) {
    const { id } = req.params

    try {
        const item = await CartItem.findByPk(id)
        item.destroy()
    
        res.json({
            mensaje: "Producto retirado del carrito"
        })
    } catch (e) {
        console.error(e)
        res.json({
            mensaje: "No se pudo eliminar el producto de tu carrito"
        })
    }
}