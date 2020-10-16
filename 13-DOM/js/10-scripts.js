// TODO: Generar HTML con JavaScript, IMPORTANTE!

// REMEMBER: El método Document.createElement() crea un elemento HTML especificado por su tagName, es la forma más común.
// Ejemplo:

const nuevoEnlace = document.createElement('a'); // Aqui no importa mucho si es en mayuscula o miniscula la colocación de la etiqueta.

// EN ESTE PUNTO AUN NO AGREGAMOS EL NUEVO ENLACE A PARTIR DE ESTE PUNTO EMPEZAREMOS SU CREACIÓN!

// Agregandole el Texto
nuevoEnlace.textContent = 'Nuevo Enlace';
console.log(nuevoEnlace); // Me ayuda a saber como voy en la creación

// Añadiendo href
nuevoEnlace.href = '/nuevo-enlace';

// NOTA: Mientra no inserter el nuevo elemento, pudes seguir añadiendole mas atributos

// EN ESTE PUNTO DEBEMOS DE SABER EN DONDE QUEREMOS INGRESAR NUESTRO NUEVO ENLACE.
    // En este ejemplo lo colocaremos en el nav
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// REMEMBER: appendChild() es un metodo que agrega el nuevo elemento que creamos en la ultima pocisión.
    // Ejemplo:
navegacion.appendChild(nuevoEnlace);

// cuando nostros quedarmos agregar nuestro elemnto creado en un lugar especifico debemos de utilizar el metodo .inserBefore()

// REMEMBER: El metodo  .inserBefore() nos ayuda a colocar nuestro elemento donde nosotros deciemos solo que este metodo pide dos parametros uno es lo que se va agregar y el segundo es en donde se va a colocar.
// Ejemplo:
    // Recuerda que si no sabes como obtener la pocisión es con .children
console.log(navegacion.children);
navegacion.insertBefore(nuevoEnlace,navegacion.children[2]);


// CREANDO UN CARD (EJERSICIO II)

// Creando parrafos del card
const parrafo = document.createElement('P');
parrafo.textContent = 'Concierto'
parrafo.classList.add('categotia','concierto');
console.log(parrafo); // solo noa ayuda a ver que hacemos (creando se acbe de crear el progama de borra)

const parrafoDos = document.createElement('P');
parrafoDos.textContent = 'Musica Electronica Twomorro';
parrafoDos.classList = 'titulo';
console.log(parrafoDos); // solo noa ayuda a ver que hacemos (creando se acbe de crear el progama de borra)

const parrafoTres = document.createElement('P');
parrafoTres.textContent = '$1,500 por persona';
parrafoTres.classList.add('precio'); 
console.log(parrafoTres); // solo noa ayuda a ver que hacemos (creando se acbe de crear el progama de borra)

// Crando contenedor (div)
const div = document.createElement('DIV');
div.classList.add('card');
console.log(div); // solo noa ayuda a ver que hacemos (creando se acbe de crear el progama de borra)

// Agregando parrafos al contenedor
div.appendChild(parrafo);
div.appendChild(parrafoDos);
div.appendChild(parrafoTres);

// Creando la imagen
const img = document.createElement('img');
img.src = 'img/hacer4.jpg'
console.log(img); // solo noa ayuda a ver que hacemos (creando se acbe de crear el progama de borra)

// Creando el card o contenedor padre
const divPadre = document.createElement('DIV');
divPadre.classList.add('card');
console.log(divPadre);

// Agregando los hijos del padre
divPadre.appendChild(img);
divPadre.appendChild(div);

// Insertar al HTML
const contenedorCards = document.querySelector('.hacer .contenedor-cards');
// console.log(contenedorCards.children); // Opteniendo la pocosión
contenedorCards.insertBefore(divPadre,contenedorCards.children[1]);