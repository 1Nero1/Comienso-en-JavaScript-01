// Comparador

// Los comparadores nos ayudan como su nombre lo dice a saber si lo que buscamos es igual o es exactamente igual a lo que necesitamos
/* 
TODO
=   Operador que asigna un valor
==  Operador que indica si es igual o no a lo que se decea comparar
    (En la mayoria de loslenguajes funciona)
=== Operador Extricto valida que sea exactamente igual a lo que se decea comparar
    (Funciona en JavaScript)
 */
// Ejemplo:
let numero = 1000;

if(numero == 1000){
    console.log("El valor es identico");
} else{
    console.log("No es identico el valor");
}
// Como podemos observar el valor es correcto

// Comvertiremos "numero" a String
// numero.toString();
numero = "1000";

if(numero == 1000){
    console.log("El valor es identico");
} else{
    console.log("No es identico el valor");
}
// Como podemos obserbar el valor no es el correcto

// console.log(typeof(numero));
// Usando el Operador extricto
if(numero === 1000){
    console.log("El valor es identico");
} else{
    console.log("No es identico el valor");
}
// Como podemos ver aqui nos muestra que es incorrecto por lo tanto esta bien