// Comparando valores
// cuando se le coloca un = indica que le estas dando un valor
// cuando se le coloca un == le indicas que le estas idiendo que es igual 
// cuando se le coloca un === le indicas que le estas idiendo que es extrictamente igual

let numero = 15;
let numero2 = "15";
let numero3 = 16;

// comparando valores
console.log(numero == numero2);

// Aqui podemos ver que nos dice que es verdadero cuando sabemos que no lo es porque uno es numero y otro es texto por lo tanto deberia de dar negativo pero para hacer eso o para tener una buena comparacion debemos de usar los tres iguales (===)
console.log(numero === numero2);

// Diferente
const pass = "admin";
const pass2 = "Admin";

console.log("////////////////////////////////////////////");
console.log(pass != pass2);
console.log(pass !== pass2); //Indica si es extrictamente diferente


console.log(numero != numero2);
console.log(numero !== numero2);
