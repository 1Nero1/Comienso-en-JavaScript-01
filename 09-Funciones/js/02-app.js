// La Diferencia entre Function expression y Declaration

// Funcionara escribir las funciones de esta manera?
// Porque la funcion uno si funciono y la segunda no funciono?

// PRIMER FORMA (Declaracion de Funcion)
suma();
function suma(){
    console.log(2+2);
};
    // Esta forma si funciona por el hecho de que JavaScript recorre dos veces el codigo a esto se le conose o llama "HOSTING" 

// SEGUNDA FORMA (Expresión de Funcion)
resta();
const resta = function(){
    console.log(8-2);
};
    // Esta forma no logra a funcionar porque como se ve o sabemos su creacion es como una varibale o es como se crea en otro lenguaje por lo tanto se debe de tener de manera lineal 
////////////////////////////////////////////////////////

