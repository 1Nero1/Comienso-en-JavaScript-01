// Informacion de los numeros

let numero = "15";
let numero2 = "15.16";
let numero3 = "treita";
let numero4 = 15;

//imprimiendo la direfencia de un numero string y un numero
console.log(numero);
console.log(numero4);

// Como puedo saber si es un numero o un string?
console.log(typeof numero);
console.log(typeof numero4);
/* Que es typeof?
El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo. operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo. */
console.log("/////////////////////////"); //Borrar

// Convertit un numero String a Number (o numero)
console.log(numero); // Entero
console.log(Number(numero));
console.log(parseInt(numero)); 

console.log(numero2); // Decimal
console.log(Number(numero2));
console.log(parseFloat(numero2));

// Revisar si el numero es entero o no, regresa un boleano 
//  (Se usa el metodo )
console.log(Number.isInteger(numero));
console.log(Number.isInteger(numero4));