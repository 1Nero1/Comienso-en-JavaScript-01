// Modificando Objetos en "Modo Estristo" (Objeto sellado)

//TODO *Sabemos que cuando estamos en modo estricto y deseamos que se pueda modificar un objeto pero no agregar ni eliminar informacion solo modificar la que tiene podemos utilixar el metodo (.seal)
// Object.seal()
// Ejemplo:
"use strict";

const dato = {
    nombre: "Objeto",
    modificar: true,
    agregarValor: true,
}
console.log(dato);

//Metodo seal
Object.seal(dato);

// Modificando valores
dato.agregarValor = false;
console.log(dato);

// EN ESTE PUNTO NO NOS PERMITIRA AGERGAR O ELIMINAR ASI QUE NOS DARA ERROR
/* 
// Agregando
dato.nValor = "Hola";
console.log(dato);

// Eliminando
delete dato.modificar;
console.log(dato);
*/

// Mostrar si el Objeto puede ser o fue modificado
console.log(Object.isSealed(dato));