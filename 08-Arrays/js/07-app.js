// Borrar valores de un arreglo (Declarativa)

const carritoCompras = [];

function productos(producto,precio){
    this.producto = producto;
    this.precio = precio;
    disponible = true;
};

const productoUno = new productos("Tarjeta Madre",5419);
const productoDos = new productos("Procesador",5000);
const productoTres = new productos("Ram ddr4",2000);
const productoCuatro = new productos("SSD",1500);
const productoCinco = new productos("Dico duro 2T",2000);

// Agregando datos de forma Declarativa
carritoCompras.push(productoUno);
carritoCompras.push(productoDos);
carritoCompras.push(productoTres);
carritoCompras.push(productoCuatro);
carritoCompras.push(productoCinco);

console.table(carritoCompras);

/* 
// Agregabdo datos de forma imperativa
let compra = {...carritoCompras, productoUno};
compra = {...compra, productoDos};
compra = {...compra, productoTres};
compra = {...compra, productoCuatro};
compra = {...compra, productoCinco};
console.table(compra);
*/

// Borrar datos del final (productoCinco)
// TODO POP es un metodo que sirve para borrar valores pero solo el final
carritoCompras.pop();

console.table(carritoCompras);

// Borrar datos del inicio (productoUno)
// TODO SHIFT es un metodo que sirve para borrar valores pero solo el final
carritoCompras.shift();

console.table(carritoCompras);

// TODO Existe otro metodo que sive para borrar el valor que uno desea, este se le conoce como "splice(1,1)" pero a este metodo se le tiene que agregar dos valores el primero es la posicion dende iniciara a cortar y el segundo indica cuantos elementos seran eliminados.
/* 
// Borrar donde se encuentra la "ram dd4"
carritoCompras.splice(1,1);
console.table(carritoCompras);
*/
/* 
// Si indicamos que el lugar de ser "splice(1,1)" sea "splice(1,2)" esto indica que se posicionara en el lugar uno y borrara los dos datos siguentes:
carritoCompras.splice(1,2);
console.table(carritoCompras);
*/
// REMEMBER Como podemos observar el metodo "splice" puede borrar lo que deceamos siempre y cuando indiquemos bien lo que deceamos por ejemplo si queremos borrar el primmer dato y el ultmo tendia que ser asi:
console.log("Mostrando la tabla");
console.table(carritoCompras);
console.log("Borrando el primer valor");
carritoCompras.splice(0,1); // Borrando el primer valor
console.table(carritoCompras);
console.log("Borrando el ultimo valor");
carritoCompras.splice(1,1); // Borrando el ultimo valor
console.table(carritoCompras);