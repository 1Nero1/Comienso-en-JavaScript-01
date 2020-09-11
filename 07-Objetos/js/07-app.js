// Problema de los Objetos
// Como sabemos cuando creamos una variable "const" esta no se puede modificar 
const valor = "no se puede modificar";
console.log(valor);

/*valor = "nos mandara error";
console.log(valor); */

// Pero en los Objetos no pasa igual, en este caso podemos modificarlos
const objeto = {
    nombre: "Objeto",
    creacion: "10-09-2020",
    dato: "meteremos mas datos",
}
console.log(objeto);

// Agredando nuevo dato en el Objeto
objeto.nDato = "Nuevo dato"
console.log(objeto);

// Eliminando dato del Objeto
delete objeto.nDato;
console.log(objeto);

// Como podemos ver el "Objeto" tiene la variable "cosnt" y aun asi se puede modificar pero es el unico caso. Pero hay una forma para evitar que esto pase y es poniendo el "JavaScript" en modo estricto.