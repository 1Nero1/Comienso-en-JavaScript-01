//TODO Funcionalidad de los metodos  (.includes) y (.some)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Para recorrer un arreglo lo realizamos de manera manual algo que esta bien pero es mas codigo y hay ocaciones en la que es inicesario si buscamos un valor en especifico
// Ejemplo:
// Recorre los arreglos de arriba y busca un valor de ello

// Forma Manual
meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log('Si existe Enero');
    }
});

// Forma Automatica (Uso de los Metodos)

//TODO El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

// El metodo (.incluedes) solo funciona para arreglos (Arreglos simples). Solo traera un boleano si es encuentra el valor buscado regresara verdadero en caso contrario sera falso

let optenerMes = meses.includes('Abril');
console.log(optenerMes);

// REMEMBER: Que solo el método .includes() funciona para arreglos simples asi que si tiene un arreglo tiene objetos dentro no funcionara este método

// TODO: El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
// El método (.some) funciona para ambos tipos de arreglos con objetos dentro o sin ello (simples o tradicionales)

// REMEMBER: los pasos de un ARROW FUNCTION ya que este metodo (.some) funciona con arrow functiom
// Solo traera un boleano si es encuentra el valor buscado regresara verdadero en caso contrario sera falso

//  |Varibale que deseamos
//  |        |Aqui va el arreglo
//  |        |        |Aqui va el Metodo .some()
//  |        |        |   |Aqui colocamos el nombre que le daremos a los valores del arreglo
//  |        |        |   |
let compra = carrito.some(producto =>{
    return producto.nombre === 'Audifonos';
});

console.log(compra);