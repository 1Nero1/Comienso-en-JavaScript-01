//TODO: .find

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Foma Manual: Con forEach y Arrow Function
let resultado = '';
carrito.forEach((productos,index) =>{
    if(productos.nombre === 'Audifonos'){
        resultado = carrito[index];
    }
});
console.log(resultado);

// Forma Automatica (menos código)
let resultadoDos = carrito.find(producto => producto.precio === 700);
console.log(resultadoDos);

// REMEMBER: En caso de que se realize una evaluación que nos regrese varios valores solo nos mostrara o retornara el primer valor que se encuentre, Ejemplo:
let resultadoTres = carrito.find(producto => producto.precio >= 400);
console.log(resultadoTres);