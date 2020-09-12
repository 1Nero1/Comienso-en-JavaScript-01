// Acceder a un Arreglo

const primerArreglo = [50,40,30,20,10];

// Existen dos formas de imprimir un arreglo

// Primer forma (Más comun)
console.log(primerArreglo);

// Segunda forma (Más bonita o mejor presentacion)
console.table(primerArreglo);

// Para acceder a valor de un arreglo es como los objetos pero en lugar de indicar objeto.valor etc. lo hacemos por medio de indices, ejemplo:

const segundoArreglo = [50,40,30,20,10]; // Este arreglo tiene 5 indices pero solo llega a 4
//                     [0|1 | 2| 3| 4] --> Aqui es dodne se encuentran los indices

// Entonces si nosotros deseamos acceder al valor 30 devemos de indicar el indice 2, ejemplo;
console.log(`Mostrando valor`);
console.log(segundoArreglo[2]);

console.log("Traeme el numero 30 y 50");
console.log(segundoArreglo[2], segundoArreglo[0]);

// Podemos mostar un arreglo anidado?
let tercerArreglo = [50,40,30,20,10,[9,8,7,6,5,4,3,2,1]];
console.table(tercerArreglo);

// Para acceder al segundo arreglo es igaul que el arreglo anterior solo que en este colocaremos en que arreglo inicia ejemplo:
tercerArreglo = [50,40,30,20,10,[9,8,7,6,5,4,3,2,1]];
//               [0| 1| 2| 3| 4| 5] --> Primer arreglo
//                              [0|1|2|3|4|5|6|7|8] --> Segundo arreglo
// Si nos damos cuenta en el 5 es donde termina el "primer arreglo" y es donde empieza el "segundo arreglo" entonces es donde como lo mostraremos ejemplo:

// Muestrame solo los datos del segundo arreglo
console.log("Mostrando el segundo arreglo");
console.table(tercerArreglo [5]);

// Muestrame el valor que tiene el indice 5 del segundo arreglo
console.log("Mostrando un valor del segundo arreglo");
console.log(tercerArreglo [5][5]);

// Muestrame el valor del indice 0 y 8 del segundo arreglo
console.log(`Este es el valor del primer indice del segundo arreglo ${tercerArreglo[5][0]}`);
console.log(`Este es el valor del ultimo indice del segundo arreglo ${tercerArreglo[5][8]}`);