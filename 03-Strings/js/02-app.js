// Metodos para los String o cadenas de texto

const producto = 'Pantalla de 24 pulgadas curvo';

console.log(producto);

//El metodo ".length" ayuda a saber cuantas letras tiene el texto
console.log(producto.length);

//El metodo ".indexOf" El método indexOf se usa para obtener el valor entero de un índice particular de objeto tipo String, en base a los criterios especificados en los parámetros del método IndexOf.
console.log(producto.indexOf('Pantalla'));
// Si nos muestra un numero negativo es que no lo encontro


// El metodo ".includes" es mas usado que ".indexOf" este metodo nos muestra un boleano si lo encuentra o no lo encuentra
console.log(producto.includes('Pantalla'));
