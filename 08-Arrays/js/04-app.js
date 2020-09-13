// Agregar y modificar arreglos
// Para agregar o modificar un arreglo es como en los objetos se inidca que valor se va a cambiar pero en este caso es la posicion ejemplo:
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// Posicion        0  |     1    |    2   |     3   |   4
console.table(meses);

// Modificar un arreglo
meses [0] = "Aqui va el primer mes del año"
console.table(meses);

// Agregando un nuevo valor a un arreglo
meses [5] = "Junio";
console.table(meses);

// TODO Los arreglos al igual que los onjetos no le afecta el "const" por ello es que utilizando la variable "const" aun se pueden modificar a no se que se ponga en modo estricto