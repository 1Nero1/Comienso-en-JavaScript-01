//TODO El Ejercicio Fizz Buzz
// Para obtener más informacion buscar en linea.

// De que trata?
// Cada ciertos numero se tiene que escribir una palabra.

// Cada multiplo de 3 se tiene que escribir "Fizz"
// Cada multiplo de 5 se tiene que escribir "Buzz"
// Cada multiplo de 15 se tiene que escribir "Fizz Buzz"
// De una lista de 100

    // Mala Practica //
for(let i = 1; i <= 100; i++ ){
    if(i % 3 === 0){
        console.log(`Fizz`);
        continue;
    };
    if(i % 5 === 0){
        console.log(`Buzz`);
        continue;
    };
    if(i % 15 === 0){ // REMEMBER que cuando busques una condición y no sale como quieres verifica que si es la MENOS PROBABLE tiene que ir al inicio. Aqui es donde se aplica el Mayor a Menos de su probabilidad que aparezca.
        console.log(`Fizz Buzz!!!`);
        continue;
    };
    console.log(`Número ${i}`);
};

/* 
    // BUENA PRACTICA //
for(let i = 1; i <= 100; i++ ){
    if(i % 15 === 0){ // REMEMBER que cuando busques una condición y no sale como quieres verifica que si es la MENOS PROBABLE tiene que ir al inicio. Aqui es donde se aplica el Mayor a Menos de su probabilidad que aparezca.
        console.log(`Fizz Buzz!!!`);
        continue;
    };
    if(i % 3 === 0){
        console.log(`Fizz`);
        continue;
    };
    if(i % 5 === 0){
        console.log(`Buzz`);
        continue;
    };
    console.log(`Número ${i}`);
};
 */

