// Arrow Functions en un forEach y un .map

// Que es .map? es igual que foreach solo que este nos permite crear una nueva variable
// Ejemplo:
const carrito =[
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];
console.table(carrito);

// CAMBIAREMOS LAS FUNCIONES POR ARROW FUNCTION

// Con foreach
/*
// Original
const nuevoArreglo = carrito.forEach(producto => {
   return `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`;
});
console.log(nuevoArreglo);

// Con .map
const nuevoArregloDos = carrito.map(producto => {
    return `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`;
});
console.log(nuevoArregloDos);
*/
///////////////////////////////////////////////////////////////////////////////////
// Usando Arrow Function y todas sus caracteristicas aprendidas hasta el momento
// Si tenemos dudas ir a 11-app.js

// Con foreach
const nuevoArreglo = carrito.forEach( producto => `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`);
console.log(nuevoArreglo);

// Con .map
const nuevoArregloDos = carrito.map( producto => `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`);
console.log(nuevoArregloDos);
