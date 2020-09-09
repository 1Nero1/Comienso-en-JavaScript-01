// Objeto dentro de otro objeto (Objetos anidados)
// TODO Para este ejemplo de un "objeto dentro de otro objeto" u "objetos anidados" los llamaremos por niveles. Ejemplo;

const persona = { //Nivel Uno
    nombre: "Maiky",
    edad: "32",
    vivo: true,
    strimer: { //Nivel Dos
        striming: "La mayoria de los dias",
        horario: "10:00 pm",
        estado: "Activo"
    }
}

console.log(persona); // Info. global

// Obtener informacion por Objetos (Niveles)
    // Info. Nivel uno
console.log(persona.edad, persona.nombre, persona.vivo);
console.log(persona.nombre,);
console.log(persona.vivo);
console.log(`Nombre ${persona.nombre} su edad es ${persona.edad} estado vivo ${persona.vivo}`);

    // Info. Nivel dos
console.log(persona.strimer.striming);
console.log(persona.strimer.horario);
console.log(persona.strimer.estado);
console.log(`Los directos son ${persona.strimer.striming} en el horario de ${persona.strimer.horario} estado del striming ${persona.strimer.estado}`);