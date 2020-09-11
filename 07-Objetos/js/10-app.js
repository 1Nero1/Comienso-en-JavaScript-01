// Copiar dos objetos en uno solo
const persona = {
    nombre: "Maiky",
    edad: 32,
    trabajando: true,
}

const ocupacion = {
    tiempoLibre: "Jugador",
    trabajo: "Productor",
}

console.log(persona);
console.log(ocupacion);

// Para unir dos objetos o copiarlos en uno solo se pueden hacer de dos maneras:

// Primer forma:
const union = Object.assign(persona, ocupacion);
console.log(union);

// Segunda forma (Más usada)
// Spread Operator o Reset Operator
const union2 = {...persona, ...ocupacion};
console.log(union2);