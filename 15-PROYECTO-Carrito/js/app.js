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
    evento.preventDefault(); // Solo lo usamos por el momento ay que nuestros enlaces tienen #
    if(evento.target.classList.contains('agregar-carrito')){
            // Aplicaremos traversing
        const cursoSeleccionado = evento.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// NOTA: Se recomienda no hacer funciones tan largas (Dividir las secciones.) 

// Lee el contenido de HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);
    // Crear un objeto con el contenido del curso actual
    const datosCurso = {
        // NOTA: Normalmente lo acemos con "document" pero en este caso curso tiene datos del HTML que conseguimos en el "Traversing"
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    console.log(datosCurso);
}