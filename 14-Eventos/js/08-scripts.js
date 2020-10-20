// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');


// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
// NOTA: Para pasar parametros necesitamos que sea una funcion anonima o un arrow function
parrafo2.onclick = function(){
    pasandoParametros('pasando un parametro')    
}

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
// NOTA: Al momento de escribir "on" nos apareceran todas las acciones que tiene por usar en este caso usaremos el "onclick"
parrafo3.onclick = nuevaFuncion;

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info


// TODO: Prevenir Event Bubbling con un método

// NOTA: Esat forma de evitar el "Event Bubbling" es por medio de un metodo "onclick" pero solo se us cuando se comienza a crear contendio o en lugares muy especificos.

// Click normar (Linea 21)
function nuevaFuncion(){
    console.log('Haz echo click en precio');
}

// Click con parametros (Linea 12)
function pasandoParametros(id){
    console.log('haz echo click en titulo',id);
}

//NOTA: Esta forma es muy usada cuando se crean API's