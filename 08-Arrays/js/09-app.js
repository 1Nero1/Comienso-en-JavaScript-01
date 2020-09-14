// Iterando array con diferentes for

// Sabemso que para recorrer un arreglo de manera más rapida (automatica) se una un for pero para los arreglos en especial los arreglos con objetos adentro es mas usado el foreach veremos su diferencias.

// Crea un arreglo con objetos
const carrito =[
    {nombre: "Tarjeta Madre", precio:5419},
    {nombre: "Procesador", precio:5000},
    {nombre: "Ram ddr4", precio:2000},
    {nombre: "SSD", precio:1500},
    {nombre: "Dico duro 2T", precio:2000},
];
console.table(carrito);

// Realizando el recorrido con un for
for(let indice = 0; indice < carrito.length; indice++){
    console.log(`El poducto es: ${carrito[indice].nombre} y su precio es de: ${carrito[indice].precio}`);
};

// Realizando el recorrido con un foreach
    //       |Aqui va el nombre del array a utilizar
    //                    |Aqui va el nombre que nosotros deceamos ya que esta parte
    //                    |sustituye la indicacion del arreglo
    //      array.forEach(element => {
    //
    //      });
carrito.forEach(producto => {
    console.log(`El poducto es: ${producto.nombre} y su precio es de: ${producto.precio}`);
});
// si no queda bien estructurado quedara mas esplicado o mejor explicado en la parte de ArrayMethods