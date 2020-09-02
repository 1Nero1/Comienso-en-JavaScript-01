// Comparando Booleans

//Ejercicio; Necesito saber si estoy inscrito
let inscripto = true;


// COMPARADOR COMUN O MAS USADO
//MALA PRACTICA
if(inscripto == true){
    console.log("Si estas inscripto");
}
else{
    console.log("No estas inscripto");
}//El if ya funciona sin la necesidad de dercile si es verdadero o falso (es el unico caso)


//BUENA PRACTICA!!!
if(inscripto){
    console.log("Si estas inscripto");
}
else{
    console.log("No estas inscripto");
}


// COMPARADOR TERNARIO O ASI ES COMO SE CONOCE
console.log(inscripto ? "Si estas inscripto" : "No estas inscripto")