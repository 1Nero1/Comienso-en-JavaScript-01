//TODO: .every()
// Determina si todos los elementos en el array satisfacen una condición.

// En otras palabas ".every" valida si todo los valores o datos cumplen la condición propuesta y devolvera un "True" en caso de que un solo valor no lo cumpla regresara "False".

//REMEMBER: En otras palabra ".every" podria tomarse como "and" y ".son" como "or"
// Ejemplo:

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Todos los valores cumplen la condición
let resultado = carrito.every(producto => producto.precio >= 100);
console.log(resultado);

// Los valores no cumplen la condición
let resultadoDos = carrito.every(producto => producto.precio < 700);
console.log(resultadoDos);