// Agregando valores mas rapido

// Para agregar o modificar valores a un arreglo tenemos que contar las posociones del arreglo para poder colocar el valro que deceamos modificar o agregar ejemplo,

// modifica marzo y coloca un tres y agrega a junio

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// Posicion        0  |     1    |    2   |    3   |   4

console.table(meses);
// Modificar
meses [2] = 3;
console.table(meses);
// Agregar
meses [5] = "Junio";
console.table(meses);

// Como podemos observar es manual y por ende tardado y que pasaria si tenemos que agregar mas meses a un arreglo que no sabes hasta que posicion termina, seria mas tardado y tendria que ir contado del valor inicial hasta el valor final para poder colocar lo que deseamos, para evitar hacer todo eso usamos el metodo "push"
// TODO El metodo "push()" nos ayuda a empujar o colocar un valor hasta el final sin la necesidad de estar contando las posiciones o casillas. Ejemplo;

//Agrega a Julio
meses.push("Julio");
console.table(meses);

// Para hacerlo más pactico podriamos decir que es usado como un carrito de compras ya que al carrito de compras se le agrega todo lo que vamos requiriendo

// Crea un carrito de compras
const carritoCompras = [];

//Crea poductos
function productos(producto,precio){
    this.producto = producto;
    this.precio = precio;
    disponible = true;
};

const productoUno = new productos("Tarjeta Madre",5419);
const productoDos = new productos("Procesador",5000);

console.log("Prouctos disponobles");
console.log(productoUno);
console.log(productoDos);

// Agregalos al carrito
console.table(carritoCompras);
carritoCompras.push(productoUno);
carritoCompras.push(productoDos);
console.table(carritoCompras);


// Agrega otro producto y colocalo en secuencia y despues al inicio

// Creando nuevo producto
const productoTres = new productos("Ram ddr4",2000);

// Agregandolo en secuencia con el corrito
carritoCompras.push(productoTres);
console.table(carritoCompras);

// Agregando en primer lugar el producto tres en el carrito de compras

    //TODO Para agregar al inicio cualquier varible sin la necesidad de estar moviendo las demas variables usamos el metodo "unshift" ya que este nos permite agregar loq ue decemos al inico de nuestro arreglo

carritoCompras.unshift(productoTres);
console.table(carritoCompras); // Aqui estamos agregando nuevamente el producto asi que aparecera doble vez ya que si lo queremos solo una vez tenemos que quitar el codigo donde lo agregamos por primera vezmo bien comentarlo

