// TODO Recorriendo un Arreglo (automaticamnete)

// Para que me sirve recorrer un arreglor? te sirve para mostrar toda la informacionque trae o tiene un arreglo puede traer desde un solo dato hasta n datos y no queremos que los muestre todos en uno solo, sino que los vaya trayendo de uno en uno ejemplo:

const primerArreglo = ["Enero", "Febrero", "Marzo"];

// De esta forma trae todo pero no es como la queremos
console.table(primerArreglo); 

// De esta forma es como deceamos que se nos muestre en la consola o/a la hora de imprimir en pantalla 
console.log(primerArreglo[0]);
console.log(primerArreglo[1]);
console.log(primerArreglo[2]);

// Pero que pasa si queremos imprimir de esa forma pero el arreglo trae n cantidad de valores?
// Para imprimir muchos valores sin tener que estar escribiendo cada uno de ellos que pueden llegar hasta el infinito existe la manera automatica pero para ello tenemos que saber cuantos valores tiene el arreglo o cuanto es lo que mide un arreglo

// TODO Como sabemos cuantos valores tiene un arreglo?
// TODO como podemos medir un arreglo?
// Para poder saber cuanto valores o cuanto miede un arreglo usamos una propiedad llamada "length". Esta propiedad si empieza desde 1 a diferencia del arreglo que empieza en 0, asi que si dice que obtiene 5 valores es porque en el arreglo tiene 5 valores.
// Ejemplo;
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Cuantos valores tiene el arreglo meses?");
console.log(meses.length);

// En este puto como ya sabemos cuanto mide el arreglo meses podemos empezar a recorrer el arreglo automaticamente.
// Para hacer esto utilizameremos un for (que es un iterador) con ello nos ayudara a recorrerlo de forma automatica
//
//        |Aqui es donde inicia.
//        |               |Aqui es donde indica que termina.
//        |               |                    |Aqui es donde va incrementar o diminuir
//        |               |                    |todo depende de lo que hagamos.
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//   }
//
// Como podemos Observar asi es como se escribira el for

// De esta forma hacemos que se nos imprima como deceamos y sin la necesidad de estar escribiendo mucho codigo, esta es la forma automatica.
for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}
