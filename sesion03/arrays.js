const frutas = ["manzana", "pera", "uva", "sandia", "maracuya", "coco"];

console.log(frutas[1]);

frutas.forEach((fruta, indice, todo) => {
    console.log(`fruta ${fruta} con indice ${indice}`, todo);
});
frutas.push("kiwi");
console.log("Kiwi agregado", frutas)
console.log("includes", frutas.includes("pera"))

const ultimoElemento = frutas.pop()
console.log("kiwi eliminado", ultimoElemento)

const nuevoArray = frutas.map((fruta) => {
    return `Me gutas la fruta ${fruta}`;
})
console.log(nuevoArray);

const frutasFiltradas = frutas.filter((fruta) => {
    return fruta.length > 4;
});

console.log("Frutas filtradas", frutasFiltradas);

const concantenadas = frutas.reduce((acumulador, actualValor) => {
    acumulador = `${acumulador} ${actualValor}`;
    return acumulador;
}, "");

console.log("Frutas concatenadas", concantenadas, typeof concantenadas);

const iterador = frutas.values()

for (let item of iterador) {
    console.log("Tu item ->", item)
}

console.log("Practicas")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const n = (i) => {
    return i * 2
}

console.log("Numero actuales", numeros);
console.log("Duplicando valor", numeros.map(numero => numero * 2));
console.log("Filtrar pares", numeros.filter(numero => numero % 2 === 0));

const precios = [20, 14, 30, 65, 73, 100, 24, 2, 37]