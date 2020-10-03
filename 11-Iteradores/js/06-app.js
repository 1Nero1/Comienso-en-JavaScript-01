//TODO .foreach y ,map

// forEach() ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente. No es invocada para índices que han sido eliminados o que no hayan sido inicializados (Ej. sobre arrays sparse)

//REMEMBER "foreach" es usado más para los arreglos, esto hara que se ejecute por lo menos una vez por cada vez que haya elementos en el arreglo. esto quiere decir que si en un arreglo tiene cinco elementos el foreach se ejecutara cinco veces.

// Ejercicio
// Crea un arreglo y correlo con el foreach

const pendientes = ["Tarea","Lavar Trastes","Comer","Estudiar"];

// |Aqui va el arreglo que se decea recorrer
// |          |Aqui inicia el foreach (es como un arrow function)
// |          |       |Aqui se escribe una variable que representara a todos los
// |          |       |elementos del arreglo
// pendientes.forEach(Tareas => {});

pendientes.forEach(tareas => {
    console.log(tareas);
});

// REMEMBER que si solo usaremos una variable lo podemos hacer más compacta
pendientes.forEach(tareas => console.log(tareas));

// REMEMBER que si queremos ver los indices nada mas colocamos una variable 
// Ejemplo:
pendientes.forEach((tareas,indices) => console.log(indices,tareas));

// Segundo Ejemplo:
const carrito = [
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000, descuento: true},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];

carrito.forEach(compras =>{
    console.log(compras.nombre);
});
// REMEMBER que si solo usaremos una variable lo podemos hacer más compacta
carrito.forEach(compras =>console.log(compras));

//TODO Junto a foreach hay otra funcion llamada ".map" es identica a foreach pero esta funcion te permite crear un nuevo arreglo algo que foreach no puede hacer 
// Ejemplo:

let nuevoArreglo = carrito.forEach(compras =>compras.nombre);
let nuevoArregloDos = carrito.map(compras =>compras.nombre);

console.log(nuevoArreglo); // Como podemos ver nos da undefined
console.log(nuevoArregloDos); // Como podemos ver nos creo un nuevo arreglo