// El Operador OR para que se cumpla al menos una condición
// A diferencia del operador && que tienen que cumplirse las dos condiciones.
// El operador OR solo necesita que se cumpla una de las condiciones para que sea aceptada
// Ejemplo:
let efectivo = 456;
let credito = 741856;
let total = efectivo + credito;
const compra = 4856;

if(efectivo > compra || credito > compra || total > compra){
    console.log("Gracias por su compra!");
}
else{
    console.log("No puedes realizar la compra");
}
