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

    //Elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    //Vaciar el carrito de compras
    vaciarCarrito.addEventListener('click', () => {
        //console.log('vaciar carrito')

        agregarArticulos = []; //Reseteamos el carrito

        limpiarHTML(); //Limpia el carrito (Borra todo el HTML)
    })
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

    //ELiminaCurso
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        //console.log(e.target.getAttribute('data-id'));
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo agregarArticulos por el data-id 
        agregarArticulos = agregarArticulos.filter( curso => curso.id !== cursoId);

        //console.log(agregarArticulos);
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}


// NOTA: Se recomienda no hacer funciones tan largas (Dividir las secciones.)

// Lee el contenido de HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //console.log(curso);
    // Crear un objeto con el contenido del curso actual
    const datosCurso = {
        // NOTA: Normalmente lo acemos con "document" pero en este caso curso tiene datos del HTML que conseguimos en el "Traversing"
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe en el carrito
        /*REMEMBER SUME permite iterar sobre un arreglo de objetos y verificar si un elemento exite en el */
    const existe = agregarArticulos.some( curso => curso.id === datosCurso.id);
    //console.log(existe);
    if(existe){ //Actualizamos la cantidad
        const losCursos = agregarArticulos.map(curso =>{
            //REMEMBER .map crea un nuevo arreglo, el cual va ir iterando sobre todos los elementos del carrito
            if(curso.id === datosCurso.id){
                curso.cantidad++;
                
                return curso; //Retorna el objeto actualizado
            }else{
                return curso; //Retorna los objetos que no son duplicados
            }
        });
        agregarArticulos = [...losCursos];
    }else{ //Agregamos el curso al carrito
        //Agrega elementos al carrito
        agregarArticulos = [...agregarArticulos, datosCurso]
        /*Se necesita una copia del arreglo anterior pra tener una referencia de los articulos que se agregaron anterior mente */
    
        console.log(agregarArticulos);
    }
    
    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){
    
    //Limpia el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    agregarArticulos.forEach(curso=>{
        //Creando un dristrocion para mejorar el codigo
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
    //Forma lenta 
    //contenedorCarrito.innerHTML = '';

    //Forma mas rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}