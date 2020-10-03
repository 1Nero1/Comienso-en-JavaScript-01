// for ...of
// La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

// El for ...of es como el for comun pero sirve como el foreach solo es que una sentencia mucho mas sencilla.
// Ejemplo:
// Crea dos arrelos uno simple y un arreglo con objetos

// arreglo simple
const pendientes = ["Tarea","Lavar Trastes","Comer","Estudiar"];

// arreglo con abjeto
const carrito = [
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000, descuento: true},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];

//  |Aqui colocas elnombre de la variables que quieres... Estas son los valores del arreglo
//  |         |Aqui se coloca el nombre del arreglo
for(let tareas of pendientes){
    console.log(tareas);
};

// Corriendo el arreglo con objetos
for(let producto of carrito){
    console.log(producto);
};