// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let agregarArticulos = [];

registroEventos();
function registroEventos (){
    // Cuando agregas un curso precionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    //Vaciar el carrito de compras
    vaciarCarrito.addEventListener('click', () => {
        agregarArticulos = []; //Reseteamos el carrito

        limpiarHTML(); //Limpia el carrito (Borra todo el HTML)
    })
}

// Funciones
    // Agregarcurso
function agregarCurso(evento){
    evento.preventDefault();
    if(evento.target.classList.contains('agregar-carrito')){
        // Aplicaremos traversing
        const cursoSeleccionado = evento.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

    //ELiminaCurso
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo agregarArticulos por el data-id 
        agregarArticulos = agregarArticulos.filter( curso => curso.id !== cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido de HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    // Crear un objeto con el contenido del curso actual
    const datosCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = agregarArticulos.some( curso => curso.id === datosCurso.id);
    if(existe){ //Actualizamos la cantidad
        const losCursos = agregarArticulos.map(curso =>{
            if(curso.id === datosCurso.id){
                curso.cantidad++;
                
                return curso; 
            }else{
                return curso;
            }
        });
        agregarArticulos = [...losCursos];
    }else{ //Agregamos el curso al carrito
        agregarArticulos = [...agregarArticulos, datosCurso]
    }
    
    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){
    
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    agregarArticulos.forEach(curso=>{
        const {imagen, titulo, precio, cantidad, id}= curso;

        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${titulo}</td>
            <td> ${precio}</td>
            <td> ${cantidad}</td>
            
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //Agrega el HTML en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}