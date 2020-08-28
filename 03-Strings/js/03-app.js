// Concatenando String en uno solo
// Para concatenar existen varias formas de hacerlo

let saludo = "Hola";
let saludoDos = "Mundo";

let producto = "Monitor de 24 pulgadas curvo",
    precio = "5000";

// Primer opción
console.log(saludo.concat(saludoDos));

// Segunda opción
console.log(saludo + " " + saludoDos);
console.log("El " + producto + " tiene un precio de " + precio);


// Tercera opción
console.log(saludo, " ", saludoDos);
console.log("El ", producto, " tiene un precio de ", precio);


// Cuarta opción (forma moderna E6)
console.log(`${saludo} ${saludoDos}`);
console.log(`El ${producto} tiene un precio de ${precio}`);
