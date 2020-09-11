// Uso Estricto
// como sabemos "JavaScript" es muy docil por ello podemos crear codigo que para otros lenguajes tendria erros ejemplos:
/*
x = 10
console.log(x)
*/
    // Como vemos aqui nos hace falta definir la variable, los punto y comas, etc.
    // Para evitar este tipo de sitiaciones existe el modo Estricto ("use strict")
"use strict";
let x = 10;
console.log(x);

// TODO Regresando con los Objetos: cuando se habilita el modo estricto ("use strict") se mos habilitan los "Object methods"

// Sin metodo
    const objeto = {
        nombre: "Objeto",
        atributos: 5,
        agregarVariables: true,
    }
    console.log(objeto);

    // Agregando variables (Llaves y valores)
    objeto.nDato = "Borrar";
    console.log(objeto);

    // Eliminando variables (Llaves y valores)
    delete objeto.nDato;
    console.log(objeto);

    // TODO Como podemos observar aun se pueden agregar y modoficar el objeto como uno quiera o desea y para ecitar eso usaremos el metodo ".freeze"

    console.log("Ejemplo dos (Con Metodos)");
// Con metodo (.freeze)
const datos = {
    nombre: "Objeto",
    atributos: 5,
    agregarVariables: true,
}
console.log(datos);

Object.freeze(datos); // Aqui indicamos que el Objeto "datos" no lo podremos modificar más

// EN ESTE PUNTO YA NO PODEMOS MODIFICAR MUESTRO OBJETO YA QUE NOS MOSTRARA ERROR POR EL METODO QUE LE DIMOS A NUESTRO OBJETO

/* 
    // Agregando variables (Llaves y valores)
    datos.nDato = "Borrar";
    console.log(datos);

    // Eliminando variables (Llaves y valores)
    delete datos.nDato;
    console.log(datos);
*/

//TODO COMO PUEDO SABER SI UN OBJETO ESTA CONJELADO O NO SE PUEDE MODIFICAR?
// Para saber si el meto esta conjelado se usa el siguiente metodo (.isfrozeen)
 console.log(Object.isFrozen(objeto));
 console.log(Object.isFrozen(datos));
