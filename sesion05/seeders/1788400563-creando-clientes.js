import { database } from '../src/api/models/index.js'
export default async function() {

  try {
    await database.Cliente.bulkCreate([
      {
        nombre: 'Ana Torres',
        email: 'cliente1@testing.com'
      },
      {
        nombre: 'Juan Perez',
        email: 'cliente2@testing.com'
      },
    ]);
  } catch(e) {
    console.error(e);
  }
}