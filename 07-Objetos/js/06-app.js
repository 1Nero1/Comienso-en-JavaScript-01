// Distructuring en objetos anidados

const persona = { //Nivel Uno
    nombre: "Maiky",
    edad: "32",
    vivo: true,
    strimer: { //Nivel Dos
        striming: "La mayoria de los dias",
        horario: "10:00 pm",
        estado: "Activo",
        localidad: { //Nivel Tres
            pais: "Mexico",
            estado: "Guadalajara"
        }
    }
}

// Extrayendo datos de los objetos con "Distructuring"
    // Datos del primer nivel
/*const {nombre, edad, vivo, strimer} = persona;
console.log(nombre, edad, vivo, strimer); */
    //Si nos damos cuenta extrae todos los datos 

    // Extrayendo datos del Segundo Nivel
/*const {striming, horario, estado, localidad} = persona.strimer;
console.log(striming, horario, estado, localidad); */
    
    // Extrayendo datos del Tercer Nivel
/*const {pais, estado} = persona.strimer.localidad;
console.log(pais, estado); */

// Extrayendo datos de cada objeto
// TODO Recuerda que para extraer datos por el metodo "Distructuring" se deben de colocar las "{}" en el orden del objeto.
/*const {nombre, strimer: {striming, localidad:{pais}} } = persona;
console.log(`El nombre es ${persona.nombre} hace striming ${striming} y es de ${pais}`); */

// Para extrar datos con su respectivo objeto se hace de la siguiente manera
/*const {nombre, strimer, strimer: {estado}} = persona;
console.log(nombre);
console.log(estado);
console.log(strimer); */


const {nombre, strimer, strimer: {estado, localidad, localidad: {pais}}} = persona;
console.log(nombre);
console.log(estado);
console.log(pais);
console.log(localidad);