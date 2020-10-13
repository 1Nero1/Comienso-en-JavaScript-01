//TODO: Cambiando el CSS con JavaScript

// TODO: Firefox con su funcion de "developer" nos ayuda con un listado llamado con el cual podremos saber que deceamos modificar.

// JavaScript de igual forma ayuda a poder cambiar CSS como en HTML
// Ejemplo:

// Cambio de estilo en el encabezado
const encabezado = document.querySelector('h1');
console.log(encabezado);
console.log(encabezado.style); // Muestra el listado de que se puede o no modificar o agregar.

/* REMEMBER:
// Sabemos que en CSS cuando se agregan funciones para poder cambiar el estilo hay ocaciones que usa (-), Ejemplo: background-color: blue;

// Cuando agregamos o queremos hacer cambios al CSS desde JavaScript no se usa el (-) en todo caso para poder hacer uso de las funciones de CSS se escribe como en JavaScript, Ejemplo: backgroundColor:; */ 

// REMEMBER: Ejemplo de cambios por medio de JavaScript
    // Solo para cambios sencillos pero se recomienda más el uso en CSS y en JavaScript el uso de clases
encabezado.style.backgroundColor = 'blue';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

// REMEMBER: Agregar o quitar clases
const carta = document.querySelector('.card');
console.log(carta);
console.log(carta.classList);

// Agregando Clases
carta.classList.add('nuevaClase');
carta.classList.add('nuevaClaseDos');

// Quitando Clases
carta.classList.remove('card');