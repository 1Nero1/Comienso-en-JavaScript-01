//Repetir una String o cadena de texto

const saludo = "Hola Mundo"

// El metodo ".repeat()" repite el texto o string N cantidad de veces o las que deseamos
console.log(saludo.repeat(3));
// Si se le pone un numero con decimal el JavaScript lo va redonder 
console.log(saludo.repeat(2.4));

/* let nombre = prompt("Cual es tú nombre? ");
let cortar = saludo.slice(0,4);
console.log(`${cortar} ${nombre}!!! `.repeat(3));
console.log(`${cortar} ${nombre}!!! `.repeat(2.1)); */

// El metodo ".split()" sirve para cortar un string, nada mas tienes que ingresar con que lo vas a cortar
console.log(saludo.split(" "));

let reseta = "Agua, Limon, Azucar, Esprimidor, Cuchara, Jarra"
console.log(reseta.split(","));



