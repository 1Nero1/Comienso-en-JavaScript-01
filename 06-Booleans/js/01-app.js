// Boolean
// los Booleans solo regresan entre verdadero y falso
let boleano = true;
let boleano2 = false;
let boleano3 = "true";

console.log(boleano);
console.log(boleano2);
console.log(boleano3);


console.log(typeof boleano);
console.log(typeof boleano2);
console.log(typeof boleano3);


console.log(boleano == boleano3);
console.log(boleano === boleano3);

// Cuando creamos un valor lo convertira en un objeto
let boleano4 = new Boolean(true);
console.log(boleano4);