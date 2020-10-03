//TODO break y continue; en un for loop
// break: Termina el bucle actual, sentecia switch o label y transfiere el control
        // del programa a la siguiente sentencia a la sentecia de terminación de
        // éstos elementos.
// continue: Termina la ejecución de las sentencias de la iteración actual del bucle
        // actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.
// Ejemplo:

// Muestrame una lista del uno al diez pero solo quiero que se muestre hasta el cinco.
for(let i = 1; i<=10; i++){
    console.log(`Este es el numero ${i}`);

    if(i === 5){
        break; // Con esta forma nos ayuda a que se detenga el bucle
    }
}
console.log("--------------------------------------------------------");
// Muestrame un lista del uno al diez pero que el cinco sea con letras
for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("Este es el número cinco");
        continue; // Con esta forma nos ayuda continuar nuestro bucle sin que se muestre el 5 
    }
    console.log(`Este es el número ${i}`); //REMEMBER colocar bien el codigo ya que si esta linea va antes del if nos mostrara en este caso el 5 que no queremos por eso lo colocamos despues del if 
}

// DONDE SE PUEDE USAR ESTAS PALABRAS RESERVADAS? O FUNCIONES

// Un Ejemplo claro seria en una lista de compras la cual en uno o varios de sus podructos tiene un descuento. En ese caso podriamos usar estas palabras para facilitar el programa
// Ejemplo:
const carrito =[
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000, descuento: true},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} tiene descuento.`);
        continue;
    }
    console.log(`Producto: ${carrito[i].nombre}`);
};