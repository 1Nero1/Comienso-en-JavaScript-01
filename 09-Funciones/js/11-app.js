// Ventajas de los Arrow Functions

// Ejemplo 1
// Expreción de Función
const aprendiendoFunciones = function (){
    console.log("Esto es una funcion en JavaScript");
};
aprendiendoFunciones();

// Arrow function
const aprendiendoFunciones2 = () => "Esto es una funcion en JavaScript";
console.log(aprendiendoFunciones2());


// Ejemplo 2
// Sabemos que una funcion tiende a recibir prametro Ejemplo:
const aprendiendoFunciones3 = function (lenguaje){
    console.log(`Esto es una funcion en ${lenguaje}`);
};
aprendiendoFunciones3("JavaScript");

// Arrow function
//REMEMBER Cuando usamos una "Arrow Function" y necesitaremos traer o mandar un solo parametro a nuestra funcion no es necesario poner parentecis SOLO SI ES UN VALOR
const aprendiendoFunciones4 = lenguaje => `Esto es una funcion en ${lenguaje}`;
console.log(aprendiendoFunciones4("JavaScript"));

// Ejemplo 3
// Reciviendo dos prarametros. Ejemplo:
const aprendiendoFunciones5 = function (lenguaje, tecnologia){
    console.log(`Esto es una funcion en ${lenguaje} y aprenderemos mas adelante ${tecnologia}`);
};
aprendiendoFunciones5("JavaScript", "Node.js");

// Arrow function
// Aqui como si tenemos dos valores tenemos que ponerlos dentro de parentecis.
const aprendiendoFunciones6 = (lenguaje,tecnologia) => `Esto es una funcion en ${lenguaje} y aprenderemos mas adelante ${tecnologia}`;
console.log(aprendiendoFunciones6("JavaScript", "Node.js"));
