// TODO: Detectar cuando el HTML esta listo

// Los eventos tienen muchos atributos 
/* document.addEventListener(''); */

/* 
// El más importante es DOMContentLoaded
// REMEMBER: El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga.
document.addEventListener('DOMContentLoaded',() =>{
    // NOTA: Este evento es el que verifica que todo el "HTML" este listo para su ejecución, como tal asi debe de escribirse "DOMContentLoaded" y siempre llevara una funcion anonima.
});
 */
// Ejemplo de su ejecución
console.log(1);

document.addEventListener('DOMContentLoaded',() =>{
    console.log(2);
});

console.log(3);