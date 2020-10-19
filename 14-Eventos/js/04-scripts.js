// TODO: Evento Submit a un formulario

// REMEMBER: preventDefault (evento)
    // El método preventDefault () cancela el evento si es cancelable, lo que significa que la
    // acción predeterminada que pertenece al evento no ocurrirá.

    // Por ejemplo, esto puede resultar útil cuando:

    // Al hacer clic en un botón "Enviar", evite que envíe un formulario
    // Al hacer clic en un enlace, evite que el enlace siga la URL
    // Nota: No todos los eventos se pueden cancelar. Utilice la propiedad cancelable para
    // averiguar si un evento es cancelable.

    // Nota: El método preventDefault () no evita una mayor propagación de un evento a
    // través del DOM. Utilice el método stopPropagation () para manejar esto.

// Este evento ocurre solamente en el formulario
// Ejemplo:

const formulario = document.querySelector('#formulario');
console.log(formulario);

// REMEMBER: El evento "submit" se activa cuando se envía un <form>.
                                    //|función anonima
formulario.addEventListener('submit', (e) => { 
    e.preventDefault(); // llamando al metodo atravez de la funcion 

    console.log('hola');

    console.log(e); // Imprimiendo la función
    console.log(e.target.action); // Imprimiendo hacia donde ira el formulario
});
// REMEMBER: "preventDefault()" nos ayuda a prevenir que se realize la acción de enviar o redireccionar a dar click en enviar del formulario.
/* */

/* 
// CÓDIGO: Para ver este código comenta el de arriba para tener una mejor vista 
                                    //| función normal o común 
formulario.addEventListener('submit',validarFormulario); // Esta forma es correcta
// formulario.addEventListener('submit',validarFormulario(evento)); // Esta forma es correcta

function validarFormulario(evento){
evento.preventDefault();

console.log('consultar una api');

console.log("Enviando informacion a:");
console.log(evento.target.action);

console.log("Imprimiendo informacion del preventDefault");
console.log(evento);
}
// NOTA: Cuando creamos esta función tenemos que rellenar con un valor en este caso es comun que se llame "evento" o puedes ponerle el nombre que deces pero es necesario por que en caso de no colocarlo no funcionara el método "preventDefault" y se ecutara como debe el código.
/**/