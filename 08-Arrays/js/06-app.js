// Crear un nuevo arreglo con el spread operator

// TODO tras la actualizacion de ES6 trajo nuevas formas de hacer lo mismo pero en diferente forma a esto se le llamo "Declarativa" y "Imperativa" hambas son muy utilizadas ya que por asi decirlo una es la forma antigua y la nueva.

// Agarrando el ejemplo de carrito de compras

const carritoCompras = [];

function productos(producto,precio){
    this.producto = producto;
    this.precio = precio;
    disponible = true;
};

const productoUno = new productos("Tarjeta Madre",5419);
const productoDos = new productos("Procesador",5000);
const productoTres = new productos("Ram ddr4",2000);

// La forma que vimos en elejercicio anterior es la fomra declarativa
/*
// Forma Declarativa
carritoCompras.push(productoUno);
carritoCompras.push(productoDos);
carritoCompras.unshift(productoTres);
console.table(carritoCompras);
*/


//TODO La forma declarativa esta mas relacionada a la programacion funcional por lo cual quedara mas caro llegando a ese momento por que a lo mejor no queda bien sementado en este momento.

// Forma Imperativa
let compra = {...carritoCompras, productoUno}; // Se asemeja mucho a un Objeto
compra = {...compra, productoDos}; // Puede decirce que es como un acumulador
compra = {productoTres, ...compra}; // De esta forma colocamos el orden que deseamos 

console.table(compra); // Estamos agarrando esta variable como el carrito de compras y eso es valido pero si llamas al carrito de comrpas no nos traera nada ya que lo estamos sustitullendo por esta variable
console.table(carritoCompras);