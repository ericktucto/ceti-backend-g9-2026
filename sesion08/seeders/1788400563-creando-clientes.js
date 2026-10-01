import { database } from '../src/api/models/index.js'
export default async function() {

  try {
    await database.Cliente.bulkCreate([
      {
        nombre: 'Ana Torres',
        email: 'cliente1@testing.com',
        password: '123456'
      },
      {
        nombre: 'Juan Perez',
        email: 'cliente2@testing.com',
        password: '123456'
      },
    ]);
  } catch(e) {
    console.error(e);
  }
}