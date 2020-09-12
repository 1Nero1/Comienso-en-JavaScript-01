// Objet Constructor

// Recordemos que hasta el momenro solo hemos hecho "Objets Literal"
const persona = {
    nombre: "Objeto Literal",
    crecion: "11-09-2020",
    objetLiteal: true,
    cantidad: 1,
};
console.log(`esto es un "Objet Literal"`);
console.log(persona);

// TODO A continuacion crearemos "Objet Constructor"
    // REMEMBER Si recordamos "this" evita que agrarre valores de otras variables y en por ello usamos "this" para evitar ese ti[o de errores

function objectConstctor(nombre2,precio2) { // Aqui indicaremso los valores que le daremos despues
    this.nombre = nombre2;
//      Llave     Valor (Aqui es donde le pondremos el valor que cacharemos arriba)
    this.precio = precio2;
//      Llave     Valor (Aqui es donde le pondremos el valor que cacharemos arriba)
    this.cantidad = 1;  // No hay problema si no estan en la perte de arriba ya que este lo queremos que se encuentre por defaul entonces no necesitamos perdir el valor.
    this.objetLiteal = false; // No hay problema si no estan en la perte de arriba ya que este lo queremos que se encuentre por defaul entonces no necesitamos perdir el valor.
};
const producto = new objectConstctor("Pantalla",1500); // Aqui le indicamos o le daremos los valores que estamos pidiendo arriba 
console.log(producto); // Pidemos obsercar que nos muestra los valors que ingresamos más los que dejamos por defaul.

const productoDos = new objectConstctor("Celular", 3500);
console.log(productoDos);