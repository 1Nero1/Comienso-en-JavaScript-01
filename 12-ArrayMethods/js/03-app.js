//TODO: .reduce
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Para obtener el valor total de lo comprado podemos hacerlo de dos formas una manual o automatica,

// Forma Manual
let = total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

//TODO: Forma Automatica o usando el metodo .reduce
let resultado = carrito.reduce((total,producto) => total + producto.precio, 0);
//              |      |        |     |            |      |               |Aqui indicamos desde donde iniciara nuestro total
//              |      |        |     |            |      |Aqui colocamos el como llegamos a lo que deceamos acumular
//              |      |        |     |            |Aqui empieza a contener todos los precios 
//              |      |        |     |Aqui colocamos el nombre que vamos a darle a nuestras 
//              |      |        |     |variables
//              |      |        |Aqui colocamos nuestro acumulador
//              |      |Aqui colocamos el metodo .redice
//              |Aqui colocamos Arreglo

console.log(resultado);