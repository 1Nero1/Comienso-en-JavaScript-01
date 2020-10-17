// TODO: Eventos con el Mouse

// Como sabemos los eventos son muchisimos y por ello veremos unos eventos del mause

// REMEMBER: Creando un evento
// Ejemplo:
// 
// |Aqui es donde va el elemento que llevara el evento
// |  |Aqui es donde va el metodo que le dara el evento a nuestro elemento
// |  |                 |Aqui es donde va el tipo de evento
// |  |                 |       |Aqui es donde va la función
// boton.addEventListener('click',() => { //Esta es una función anonima.
//     console.log("Diste click en el boton");
// });


// Trabajaremos por el etiquetado de navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// Evento Click
navegacion.addEventListener('click', () =>{
    console.log('Dondo click en navegación');
});

// Evento dblclick
navegacion.addEventListener('dblclick', () => {
    console.log('Este evento sirbe cuando se da doble click');
});

// Agregando funciones de cambio de color

// Evento mauseenter
navegacion.addEventListener('mouseenter', () =>{
    console.log('Entrando en Navegación');
    navegacion.style.backgroundColor = 'blue';
});

// Evento mouseout
navegacion.addEventListener('mouseout', () => {
    console.log('Saliendo de Navegación');
    navegacion.style.backgroundColor = 'transparent';
});