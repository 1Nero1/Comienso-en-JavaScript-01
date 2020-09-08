// Extrayendo informacion de un Objeto
// Para extraer informacion de un objeto existen dos formas

const persona = {
    nombre: "Maiky",
    edad: "32",
    vivo: true
}

// Primer forma
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Estado: ${persona.vivo}`);

// Segunda forma (NO ES MUY UTILIZADA)
console.log(persona[`nombre`]);
console.log(persona[`edad`]);
console.log(persona[`vivo`]);
