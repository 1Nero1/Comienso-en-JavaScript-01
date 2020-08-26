// Las variables con "Const"

// Las variables con "const" solo se pueden usar una ves, esto quiere decir que solo una vez le puedes asignar un valor
const variable = 'hola';
console.log(variable);

// Aquí manda error de que no es posible hacer eso,cambiarle el valor.
variable = 'Hola mundo';
console.log(variable);


// Al declarar un "const" le tenemos que ingresar un valor, no se le pude asignar un valor despues
// Mala practica
const val;
val = hola;
console.log(val);

// Buena practica
const val = 'Hola Mundo';
console.log(val);