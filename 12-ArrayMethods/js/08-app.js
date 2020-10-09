// TODO: spread operator

// REMEMBER:El operador de propagación spread operator permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
// Ejemplo:

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses);

// Uso de Spread Operator:

// Creando un arreglo con lo mismo del anterior pero con un dato más sin tener que crear o escribir lo mismo
let mes = [...meses, 'Julio'];
console.log(mes);

// REMEMBER: que Spread Operator funciona por medio de programación funcional por ende debe de estar bien estructurado para poder funcionar y no tenga errores. Por eso si en eo llegase a haber una modificacion al arreglo principal se veria reflejado em ambos arreglos.
// Ejemplo:

meses.push('Agosto');
console.log(meses);

mes = [...meses, "Agosto"];
console.log(mes);
// Como podemos ver aqui nos muestra un duplicado.

// Hacindo el mismo funcionamiento con Spread Operator pero con una funcion dentro de un arreglo
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
console.log(`Mostraando lo que llevo en el carrito`);
console.log(carrito);

const nuevoProducto = {
    nombre: 'Disco Duro',
    precio: 500,
};
console.log(`Agregando lo faltante `);
console.log(nuevoProducto);

// Uniendo el arreglo con el objeto con Spread Operator
const union = [...carrito, nuevoProducto];
// En este caso von "nuevoProducto" no se le colocan puntos "..." ya que no son el mismo valor ya que uno es un arreglo con objetos y el otro es un objeto y en todo caso se sigue la misma sintaxis como cuando se agrega un "String"

console.log('Compra final');
console.log(union);