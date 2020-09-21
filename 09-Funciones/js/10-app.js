// Arrow Functions
// Arrow Functions vino gracias a ES6 y ahora es soportado por ams librerias.

// Funcion de exprecion
const aprendiendoFunciones = function (){
    console.log("Hola! esto es una funcion normal en JavaScript");
};
aprendiendoFunciones();

// Arrow function
const aprendiendoFunciones2 = () => {
    console.log("Hola! esto es una funcion normal en JavaScript");
};
aprendiendoFunciones2();
// Como podemos observar en lugar de poner funcion y parentecis los cambiamos por parentecis y igual y mayor que.Pero se puede simpflicicar más.


// Cuando creamos una funcion con una sola linea de codigo. podemos hacerlo en una sola linea como se muestra a continuacion:
const aprendiendoFunciones3 = () => console.log("Hola! esto es una funcion normal en JavaScript");
aprendiendoFunciones3();
// Lo unico que realizamos fue quitarle los corchetes y colocarlo en una sola linea.


// Cuando solo es una liena de codigo lo que tenemos en un Arrow Function por implicito nos otorga el return
const aprendiendoFunciones4 = () => "Hola! esto es una funcion normal en JavaScript";

console.log(aprendiendoFunciones4());
