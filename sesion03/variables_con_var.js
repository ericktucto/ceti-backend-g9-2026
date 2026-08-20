console.log(edad);

// const edad = 18; // error
// let edad = 18; // error
var edad = 18;

if (true) {
    // const nombre = "Erick"; // error
    // let nombre = "Erick"; // error
    var nombre = "Erick";
}

console.log(nombre);

// const usar primero al declarar una variable
// let usar cuando necesitemos que la variable cambie
// var no usar actualmente

const usuario = {
    nombre: "Erick",
    edad: 18,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

usuario.saludar();
usuario.nombre = "Juan"
usuario.saludar()

/*
// conn siempre tendra una conexion
const conn = retornarConexionBaseDeDatos()

// Promise<{id, nombre}>
conn.execute(
    "SELECT id, nombre from usuarios where usuarios.id = ?",
    [1]
)
conn.close()
*/