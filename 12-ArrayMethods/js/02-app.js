// .findIndex para encontrar la posición en un array

// TODO: El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
// Ejemplo:
// Crea dos arreglos uno simple y uno complejo y extrae su posicion (Indice) de cada uno de ellos de forma manual y automatica

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Forma Manual

meses.forEach((mes,indice) => { // REMEMBER: que mes e indice son nombres que tu deceas darle a los valores y pocociones, Recuerda que "Indice" es la pociocion del valor que deceas.
    if(mes === 'Mayo'){
        console.log(`Mayo se encuentra en el indice o posocion ${indice}`);
    }
    
});

// Forma automatica

// REMEMBER: esto es con ayuda de un ARROY FUNCTION asi quecierda como se usa y cuales son sus ventajas
let indice = meses.findIndex(mes => mes === 'Mayo');
console.log(indice);

// Sino lo encuentra regresa -1 como el ejemplo
indice = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice);

// Obteniendo posiciones del array con objetos
indice = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(indice);
// TODO: En caso de que se encuentren varias variables con el mismo nombre o tributos (.findIndex) solo te muestra el primero que encuentra