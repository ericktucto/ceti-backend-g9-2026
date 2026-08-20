function sumar(a, b) {
    this.name = "Erick"
    console.log(this.name)
    const imprimir_this = () => {
        console.log(this.name, a)
    }
    imprimir_this()
    return a + b
}

///sumar(3, 4)

function restar(a, b) {
    return a - b;
}
function login(email, password) {
    // logica para validar
    // hacer login
}
console.log(restar(14, 5))

function saludo(nombre) {
    console.log(`Hola, que tal ${nombre}`)
}

saludo("Erick");

const n = (i) => {
    return i * 2
}
const m = (i) => i * 2
const p = i => i * 2
// const p = i, y => i * 2 // no hacer