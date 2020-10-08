//TODO: .concat

//REMEMBER: El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
// Ejemplo:
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const mesesDos = ['Julio', 'Agosto', 'Septiembre'];
const mesesTres = ['Octubre', 'Noviembre', 'Diciembre'];

// Unión de dos arreglos
let resultado = meses.concat(mesesDos);
console.log(resultado);

// Unión de tres arreglos
let resultadoDos = meses.concat(mesesDos,mesesTres);
console.log(resultadoDos);

// Agregar un valor
let resultadoTres = meses.concat(mesesDos, mesesTres, 'fin de año');
console.log(resultadoTres);

// TODO: spread operator

// REMEMBER:El operador de propagación spread operator permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
// Ejemplo:

// Unión de dos arreglos
let res = [...meses, ...mesesDos];
console.log(res);

// Union de tres arreglos o más
let resDos = [...meses, ...mesesDos, ...mesesTres];
console.log(resDos);

// Se puede agregar un varlor como ".concat"? Si se puede nada mas hay que tener cuidado de la union
// Ejemplo:

let resTres = [...meses, ...mesesDos, ...mesesTres, ...'aqui hay problema'];
console.log(resTres);
// REMEMBER: Como podemos observar nuestra palabra que ingresamos lo es agarrando como arreglo cada letra que por ende no esta bien y para poder quitar o que no se realise este error hay que verificar si lo que vamos agregar es un valor o un arreglo y en caso de que solo sea un valor no se agregan los puntos.
// Ejemplo

let resCuatro = [...meses, ...mesesDos, ...mesesTres, 'aqui no hay problema.'];
console.log(resCuatro);

// REMEMBER: Recordar que todos los arreglos que acomodemos lo iremos ordenando como nosotros queremos ya que no lo realiza de forma automatica.