
export function listarCliente(req, res) {
    res.json({
        clientes: []
    })
}

export function obtenerCliente(req, res) {
    res.json({
        message: 'Obtener Cliente'
    })
}

export function crearCliente(req, res) {
    res.json({
        message: 'Crear Cliente'
    })
}

export function actualizarCliente(req, res) {
    res.json({
        message: 'Actualizar Cliente'
    })
}

export function eliminarCliente(req, res) {
    res.json({
        message: 'Eliminar Cliente'
    })
}
