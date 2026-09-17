import { database } from '../src/api/models/index.js'
import CreandoProductosSeeder from './1788395787-creando-productos.js'
import CreandoClientes from './1788400563-creando-clientes.js'

async function main() {
    const { sequelize } = database
    await sequelize.authenticate();
    await sequelize.sync({ force: true })

    try {
        await Promise.all([
            CreandoProductosSeeder(),
            CreandoClientes(),
        ])
        console.log("Todos los seeders se ejecutaron")
    } catch(e) {
        console.error(e)
    } finally {
        await sequelize.close();
    }

}

main();