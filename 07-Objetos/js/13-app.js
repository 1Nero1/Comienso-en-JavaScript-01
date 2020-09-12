// TODO Más metodos para Objetos
// REMEMBER Sabemos que existen metodos para todo tipo de funcionalidades como el "freezer", "Seal", etc. Y en este caso veremos otros tres que sirven para mostar llaves, valores o ambos de un objeto
//Todos los metodos a continuacion los regresa como Arrays

const persona = {
    nombre: "Maiky",
    edad: 32,
    soltero: true,
};
console.log(persona);

// Keys
// Este metodo nos permite ver las llaves de los objetos
console.log(Object.keys(persona));

// values
// Este metodo nos prermite ver los valores de los objetos
console.log(Object.values(persona));

// entries
// Este metodo nos prermite ver las llaves y sus respectivos valores de par en par
console.log(Object.entries(persona));