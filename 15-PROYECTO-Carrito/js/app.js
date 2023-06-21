// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let agregarArticulos = [];

// NOTA: Se recomienda crear una funcion donde contenga todos los eventos
registroEventos();
function registroEventos (){
    // Cuando agregas un curso precionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso); /* Recuerda que no es necesario porner los parentecis en la función (solo en este caso)*/
}

// Funciones
    // Agregarcurso
function agregarCurso(evento){
    evento.preventDefault(); // Solo lo usamos por el momento ya que nuestros enlaces tienen #
    if(evento.target.classList.contains('agregar-carrito')){
        // Aplicaremos traversing
        const cursoSeleccionado = evento.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
/*REMEMBER Que en un proyecto verdadero en lugar de tener # va el enlace "www.ejemplo.com" */



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

    //Agrega elementos al carrito
    agregarArticulos = [...agregarArticulos, datosCurso]
    /*Se necesita una copia del arreglo anterior pra tener una referencia de los articulos que se agregaron anterior mente */

    console.log(agregarArticulos);
    
    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){
    
    //Limpia el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    agregarArticulos.forEach(curso=>{
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td> ${curso.titulo}</td>
            <td> ${curso.precio}</td>
            <td> ${curso.cantidad}</td>
        `;

        //Agrega el HTML en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta 
    //contenedorCarrito.innerHTML = '';

    //Forma mas rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}