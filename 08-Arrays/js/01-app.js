//TODO Creando Arrays

// Que es un array? guardar diferentes valores de una misma variable o diferentes

// Como crear un array? Existen dos formas de crear un arrar una mas comun que la otra, Todos los arreglos o la mayoria de los lenhuajes empiezan en 0 rara vez empiezan en 1

// Primer formas (Más usada)
const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arregloString = ["Hola", "Mundo"];
const arregloBoolean = [true, false];

console.log(arregloNumeros);
console.log(arregloString);
console.log(arregloBoolean);

// Segunda forma (Menos usada)
// Esta forma es un poco mas similar a otros lenguajes a la creacion de arrays
const arrayMeses = new Array ("Enero","Febrero","Marzo");
console.log(arrayMeses);

// Un Array puede teneas mas de un tipo de dato ejemplo
const todo = [15,"Hola Mundo",true,{dato: "no sabia que se podia hacer esto, un objeto dentro del arreglo"},"fin"];
console.log(todo);

// De igual forma como los Objetos podemos tener arreglos adentro de otros arreglos (Arreglos anidados)
const dosArreglos = [1,2,3,["Esto","es","otro","arreglo"]];
console.log(dosArreglos);