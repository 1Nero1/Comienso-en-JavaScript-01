// Información y creación de una funcion

// TODO Que es una funcion?
// es una sección de un programa que calcula un valor de manera independiente al resto del programa.

// TODO Como se crea una function? Existen dos dormas de crear una funcion pero una va más relacionada a este lenguaje (JavaScript) y la segunda forma tiene un poco más de parecido a otros lenguajes.

// PRIMER FORMA (Declaracion de Funcion)
    // // INFORMACION DE SUS ESTRUCTURA
    // //       |nombreDeLaFuncion
    // function suma(){
    //     // Aqui va si contenido que le indicaremos
    //     console.log(2+2);
    // };
    // suma(); // Asi es como se imprime
function suma(){
    console.log(2+2);
};
suma();

// SEGUNDA FORMA (Expresión de Funcion)
const resta = function(){
    console.log(8-2);
};
resta();
    // Como podemos observar des esta forma se crea una funcion pero es similar a la creacion de una variable o un objeto pero de ahi en fuera su contenido y su impresion es igual que la perimera