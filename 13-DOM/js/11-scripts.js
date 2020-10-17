// TODO: Código de eventos (Un Ejemplo más avanzado de lo que podemos hacer con JS)

// En este ejemplo veremos como crear eventos con los cuales se trabaja de diferentes formas como cuando se da click, se pasa el cursor, entre otras más.

// Para este ejemplo seleccionaremos el boton ideio y moneda de nuestro html.
// Al cual le daremos un evento sencillo y despues uno ya mas complejo

// Creando evento Sencillo

const boton = document.querySelector('.btn-flotante');
console.log(boton);

const fooder = document.querySelector('.footer'); // Este elemento abre
console.log(fooder);

/* 
// TODO: Creando un evento
// NOTA: Para crear un evento, se necesita tener el elemnto al cual se le quiere dar ese evento, cuando tenemos el elemento que vamos a crear le añadimos el método "addEventListener()" ya este le dara su funcionamiento.
// REMEMBER: "addEventListener()" nos ayuda a darle un evento a nuestro elemento, Para ello necesitamos tener dos parametros para este metodo uno es el evento que se llevara acabo (click, onclick, onmouseout, etc.) y el otro parametro es una función, arrow function o un funcion anonima  ya que este es la encargada de decir que es lo que hara.
// Ejemplo:
// |Aqui es donde va el elemnto que llevara el evento
// |  |Aqui es donde va el metodo que le dara el evento a nuestro elemento
// |  |                 |Aqui es donde va el tipo de evento
// |  |                 |       |Aqui es donde va la función
boton.addEventListener('click',() => { //Esta es una función anonima.
    console.log("Diste click en el boton");
});
 */

boton.addEventListener('click',rellenoEvento);

// REMEMBER: El método Node.contains() devuelve un valor Boolean indicando si un nodo es descendiente de un nodo dado o no.

function rellenoEvento(){
    if(fooder.classList.contains('activo')){ // Verificando si ya existe esta clase
        fooder.classList.remove('activo');// Removiendo si esiste la clase
        boton.classList.remove('activo');// Cambiando de color al botón
        boton.textContent = 'Idioma y Moneda'; // Reafirmando el texto inicial
        // NOTA: Como sabemos el botón es el que hace toda la acción por lo tanto no es necesario especificar que "boton" haga lo mismo podemos usar la palabra reservada "this" ya que hace referencia la mismo elemento.

    } else{
        fooder.classList.add('activo'); // Agergando si no existe la clase
        // Ejemplo con "this"
        this.classList.add('activo'); // Cambiando de color al botón
        this.textContent = 'X Cerrar'; // Cambiamos el texto del botón
    }
};