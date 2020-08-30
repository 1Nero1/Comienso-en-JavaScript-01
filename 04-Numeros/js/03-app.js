// Clase Math
// La clase "Math" es "Objeto" nos sirve para optener o teneir una forma mas precisa de  las funciones matematicas, Ejemplo;
console.log(Math.PI);


let resultado;

// ".round()" redondea el valor, dato curiosa que su es igual a 5.5  lo redonde hacia arriba
resultado = Math.round(5.6);
resultado = Math.round(2.2);

// ".ceil()" redonde hacia arriba
resultado = Math.ceil(2.1);

// ".floor()" redondea hacia abajo
resultado = Math.floor(2.9)

// ".sqrt()" saca las raizes cuadradas
resultado = Math.sqrt(144);

// ".abs()" trae el valor absoluto (no importa si es positivo o negativo)
resultado = Math.abs(-505);

// ".pow()" es la potencia
resultado = Math.pow(4,2);

// ".min()" optiebe el valor minimo
resultado = Math.min(10,9,6,5,8,1,2);

// ".max()" optiebe el valor maximo
resultado = Math.max(0,9,6,5,8,1,2);

// ".random()" da un numero al azar pero rara vez es entero
//resultado = Math.random() * 20;

resultado = Math.floor(Math.random() * 30);

console.log(resultado);