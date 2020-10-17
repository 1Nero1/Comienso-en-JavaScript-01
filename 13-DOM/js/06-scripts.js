//TODO: Modificar Textos o Imagenes con JavaScript

// Modifica el H1
let titulo = document.querySelector('.contenido-hero h1');
console.log(titulo);
    // REMEMBER: Es importante saber donde usar "querySelector" y "querySelectorAll".
            // "querySelector" se usa siempre y cuando solo exista un elemento con un solo identidicador ya sea Id o clase
            // "querySelectorAll" se usa siempre  y cuando existan más de un identidicador

// TODO: Para poder ingresar al texto de cual quien elemento existen tres formas de aceder a ese texto.

// REMEMBER: Estas Dos formas son similares, solo tienen un cambio el cual es que cuando el CSS se encuentra habilitado una propiedad (visibility: hidden:), tendran un ligero cambio.
    // Primer Forma
        // Esta propieda no se mostrara cuando este habilitada dicha propiedad en CSS
    console.log(titulo.innerText);
    // Segunda Forma
        // Esta propieda mostrara el contenido aun cuando se encuentre dicha propiedad en CSS
    console.log(titulo.textContent);

// Tercer Forma
    // Esta propiedad regresa como tal el HTML
console.log(titulo.innerHTML);


// Forma de mostrar texto en una solo linea
    //REMEMBER: chain o encadenamiento
titulo = document.querySelector('.contenido-hero h1').textContent;
console.log(titulo);

// Modificación

// Forma uno
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Titulo';

// Forma dos
let  nuevoMensaje= 'Aqui Colocaremos Un Nuevo Mensaje';
document.querySelector('.contenido-hero h1').textContent = nuevoMensaje;

/*==================
===Cambiar Imagen===
==================*/

// const img = document.querySelector('.contenedor-cards .card');
const img = document.querySelector('.card img');
console.log(img);

// REMEMBER: Para cambiar una imagen se usa el SRC. Una forma de ver todos estos atributos es con firefox Developer

img.src = 'img/hacer4.jpg'