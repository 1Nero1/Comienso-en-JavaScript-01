// Comunicacion entre funciones o bien encadenando funciones

// Para que nos sirve enlazar o comunicar funciones entre si?
// Nos ayuda a ahorrar codigo y asi tener un mejro control en el codigo

// Paso uno: indicamos las funciones
/*
// Este es el inicio del programa
function inicio(){
    console.log("Estamos preparando...");
}

// Nos indica el nombre
function nombre(){
    console.log("Podemos ingresar el nombre.");
}

// saludar
function saludar(){
    console.log("Hola! Bienvenido!");
}

// Indicar el adios
function adios(){
    console.log("Hasta pronto!");
}
 */


 // Paso dos: incicando la orden de llamada

// Este es el inicio del programa
function inicio(){
    console.log("Estamos preparando...");
    
    nombre(); // Aqui queremos que se ejecute cuando se mande a llamar la funcion inicio.
}

// Nos indica el nombre
function nombre(){
    console.log("Podemos ingresar el nombre.");

    //Cuando se mande a llamar esta funcion queremos que ejecute la de saludo
    saludar(); // Aqui es cuando se ejecutara la funcion saludar
};

// Saludar
function saludar(){
    console.log("Hola! Bienvenido!");

    // Cuando saludemos quedes al mismo momento decir adios
    adios(); // Aqui es cuando mandaremos a llmar la funcion adios
}

// Indicar el adios
function adios(){
    console.log("Hasta pronto!");
}

inicio(); // Aqui empezamos a llamar la funcion inicio y por ende nos ejecutara todas.

// POSDATA cuando se manda a llamar incio u pora funcion no importa mucho donde se encuentre ya que recuerda que JavaScript se ejecuta dos veces (Hosting) entonces no tiene tanto problema pero recuerda que para buenas practicas se ejecuta de manera desendente 

// POSDATA esta practica se vera o se entendera mejor con  el debugeo