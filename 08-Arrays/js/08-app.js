// TODO Distructuring en arreglos
// Al igual de los objetos los arreglos pueden tener "Distructuring"
// Como puedo usarlo? De Igal forma que los "Objetos" solo que a diferencia de ellos tienen ciertas reglas para poder ser usados porque no se puden ectrar datos como en los objetos.

const numeros = [1, 2, 3, 4, 5];
// pocision      0| 1| 2| 3| 4
console.log(numeros);

// Usando Distructuring
const [primero] = numeros;
console.log(primero);
// Como podemos ver estamos obteniendo el primer valor del arreglo
// Pero como optenemos el tercer valor del arreglo?  

const [,,tercero] = numeros;
console.log(tercero);
//Pora que son las comas (,) estas nor riven para indicar las pocisiones que saltaremos para llegar a la posicion que deseamos ejemplo si quiero llegar a la posicion cuatro debo de saltarme cuatro pocisiones

const [,,,cuatro] = numeros;
console.log(cuatro);
// REMEMBER Los nombres de los valores que se les esta dando no es necesariamente que sean eso si no que es una forma de entendere ya que en los Objetos cuando usaso "Distructurin" tenemos que colocar el mismo nombre que vamos a extraer del objeto pero aqui en los arreglos no pasa igual asi que para buena practica colocamos un nombre similar de la variable de la pocicion del arreglo

console.log("////////////////////////////////////");
// Una forma para optener solo las pocisiones que queremos y colocarlas en un arreglo es de la sigiente manera
const [,...segundo] = numeros;
console.log(segundo);

// O bien solo quiero las dos ultimas poscisiones
const [,,,...cuatros] = numeros;
console.log(cuatros);
// Esta forma es mas comun en "Reatic"