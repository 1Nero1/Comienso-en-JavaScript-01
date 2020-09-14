// .map
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

carrito.forEach(producto => {
    console.log(`El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`);
});
console.log("-----------------------------------------------------------");
carrito.map(producto => {
    console.log(`El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`);
});

//Hasta aqui todo bien, no?
// Ahora creemoslo en una nueva variable 

// Con foreach
const nuevoArreglo = carrito.forEach(producto => {
   return `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`;
});
console.log(nuevoArreglo);
// Como podemos observar don trajo indefinido

console.log("-----------------------------------------------------------");

// Con .map
const nuevoArregloDos = carrito.map(producto => {
    return `El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`;
});
console.log(nuevoArregloDos);
// como podemos observar nos trajo todo lo del arreglo en una nuevo arreglo