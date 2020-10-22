// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

// NOTA: Se recomienda crear una funcion dode contenga todos los eventos
registroEventos();
function registroEventos (){
    // Cuando agregas un curso precionando "Agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso); // Recuerda que no es necesario porner los parentecis en la función (solo en este caso)
}

// Funciones
    // Agregarcurso
function agregarCurso(evento){
    e.preventDefaul(); // Solo lo usamos por el momento ay que nuestros enlaces tienen #
    if(evento.target.classList.contains('agregar-carrito')){
        console.log('Agregando al carrito...');
    }
}