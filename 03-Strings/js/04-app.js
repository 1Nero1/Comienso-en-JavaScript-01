//Quitar espacios de un String

let saludo = "     Hola     ";
let saludoDos = "     Mundo     ";
console.log(saludo);
console.log(saludoDos);

//Recuerda que "length" es un metodo para ver el número de caracteres usados.
console.log(saludo.length);
console.log(saludoDos.length);


console.log(`${saludo} ${saludoDos}`);
console.log(`${saludo} ${saludoDos}`.length);


//Para quitar los espacios del inicio se usa el metodo ".trimStart()"
//forma actual
console.log(saludo.trimStart());
console.log(saludo.trimStart().length);

//Para quitar los espacios del Final se usa el metodo ".trimEnd()"
//forma actual
console.log(saludo.trimEnd());
console.log(saludo.trimEnd().length);

//Para quitarlos espacios en hamba partes se puede hacer lo siguiente:
console.log(saludo.trimEnd().trimStart());

console.log(`${saludo} ${saludoDos}`.trimStart().trimEnd()); //no funciono en inmedio
console.log(saludo.trimStart().trimEnd() + " " + saludoDos.trimStart().trimEnd()); //funciono XD

//Para quitar los espacios antes se usaba el metodo ".trim()" quita espacios en ambos lados
console.log(saludo.trim());


