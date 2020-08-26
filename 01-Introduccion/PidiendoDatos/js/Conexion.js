// "const" es una variable constante (no se puede cambiar)
// "prompt" es como un alerta pero en esta puedes escribir
// "document.querySelector" Te permite seleccionar elementos del HTML
// " ".contenido" " es como se llama una maquetacion de HTML
// ".innerHTML" lo que permite es agregar o insertar maquetacion en HTML
// "`${}`" es una forma de concatenar
const nombre = prompt('Cual es tú nombre?')
document.querySelector(".contenido").innerHTML = ` ${nombre} esta parendiendo JavaScript Moderno `;