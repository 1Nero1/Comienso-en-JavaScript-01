// Paramametros por default

// Los parametros por default nos sirve para evitar el famoso undefine 
// Ejemplo:

function saludo(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}. Bienvenido!`);
}
saludo("Maiky","Borrel");
saludo("Maiky");
saludo();

console.log("==========================================================");

// Solución con el problema undefine
//                      |Aqui andamos indicando que sino tiene o le mandan un valor este
//                      |sera sustituido por lo que tiene adetante
function saludos(nombre = "Desconocido",apellido = ""){
    console.log(`Hola ${nombre} ${apellido}. Bienvenido!`);
}
saludos("Maiky","Borrel");
saludos("Maiky");
saludos();