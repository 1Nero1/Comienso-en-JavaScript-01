//TODO: .filter

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let filtro;

filtro = carrito.filter(producto => producto.precio <= 200);
console.log(filtro);
//Como podemos ver nos crea un nuevo arreglo que solo contine poductos o variables con la dincion que le demos en este caso solo muestra producto con un precio no mayor a $200

filtro = carrito.filter(producto => producto.precio >= 600);
console.log(filtro);

// REMEMBER: .filter de igual forma nos ayuda para extrar productos que no decemaos como ejemplo:
filtro = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(filtro);

// Donde podremos usarlo?
// Más que nada este metodo sera el mas usado ya que es usado por tiendas en linea por un ejemplo asi que reiterando el metodo .filter sera el más usado
