//TODO For Loop
// El For Loop no es mas que el for comun o el mas usado.

// Crea una lista hasta el 20 y dime cual es par y cual es impar

for(let i=1; i<=20; i++){ // Recuerda que i es de indice o index
    if(i % 2 == 0){
        console.log(`El número ${i} es PAR`);
    }
    else{
        console.log(`El número ${i} es IMPAR`);
    }
}

// Crea una lista de carrito y muestrala en pantalla (de forma automatica)

const carrito =[
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];

// console.log(carrito.length); // Recuerda que .length te dice cuanto mide.

for(let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre);
}