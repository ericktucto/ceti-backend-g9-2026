import { database } from '../src/api/models/index.js'

export default async function() {
  try {
    await database.Producto.bulkCreate([
      {
        nombre: 'Laptop',
        precio: 250000,
        stock: 150,
      },
      {
        nombre: 'Teclado mecanico',
        precio: 35000,
        stock: 200,
      },
      {
        nombre: 'Mouse',
        precio: 12000,
        stock: 350,
      },
    ]);
  } catch(e) {
    console.error(e);
  }
}