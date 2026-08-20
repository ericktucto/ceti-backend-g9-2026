function pedirUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
        // ... pedir Usuario
        resolve("Usuario listo")
    });
}

// sincrono
console.log("1. Pedir café");

// asincrono
setTimeout(() => console.log("4. Disfrurar café"), 0)
// asincrono
Promise.resolve().then(() => console.log("3. Café listo"))
pedirUsuario().then((usuario) => console.log(`Resultado: ${usuario}`))

// se requiere instalar axios para que funcione
// axios.get('/').then(() => console.log("peticion http"))

// sincrono
console.log("2. Seguir trabajando")


