// Asignando valores de un Objeto a una variable (Distructuring)
const persona = {
    nombre: "Maiky",
    edad: "32",
    vivo: true
}

// TODO Para extraer datos de un "Objeto" y colocarlos a una "Variable" fuera del Objeto. Existen dos formas

// Primer forma (Antigua)
/*const nombre = persona.nombre;
console.log(nombre); */

// Segunda forma (Nueva "Distructuring")
/*const {nombre} = persona;
const {edad} = persona;
console.log(nombre);
console.log(edad); */

// En esta forma podemos ahorrar codigo sacando todo lo que necesitemos "Siempre y cuando este, este en el Objeto o por asi decirlo solo en este nivel", ejemplo:
const {nombre, edad, vivo} = persona;
console.log(`Nombre: ${nombre}`);
console.log(`Edad : ${edad}`);
console.log(`estado : ${vivo}`);
