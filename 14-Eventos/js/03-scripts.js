// TODO: Eventos sobre los Inputs (Uso de Teclado)

// Todos los eventos usados en esta parte son unos de los más usados todo el tiempo, estos eventos mayormente se trabajan por inputs pero los eventos en si son del teclado...
// Ejemplos:

// Eventos que suceden en input
const busqueda = document.querySelector('.busqueda');
// console.log(busqueda); // Esto solo es para saber si vamos bien.

// REMEMBER: El evento "keydown" se produce cuando se presiona una tecla.
busqueda.addEventListener('keydown', () =>{
    console.log('El evento "keydown" se produce cuando se presiona una tecla.');
});

// REMEMBER: El evento "keyup" El evento es iniciado cuando la tecla es soltada.
busqueda.addEventListener('keyup', () => {
    console.log('El evento "keyup" El evento es iniciado cuando la tecla es soltada.');
});

// REMEMBER: El evento "blur" es disparado cuando un elemento ha perdido su foco. La diferencia principal entre este evento y focusout es que sólo el último se propaga (bubbles).
busqueda.addEventListener('blur', () =>{
    console.log('"blur" evento que se ejecuta cuando se sale del "Input" (es excelente para validaciones)');
});

// Eventos que suceden en el teclado
// REMEMBER: El evento "copy" se activa cuando el usuario inicia una acción de copia a través de la interfaz de usuario del navegador.
busqueda.addEventListener('copy', () =>{
    console.log('Copiaste algo y lo detecto el evento "copy"');
});

// REMEMBER: El evento "paste" se activa cuando el usuario ha iniciado una acción de "pegar" a través de la interfaz de usuario del navegador.
busqueda.addEventListener('paste', () =>{
    console.log('Pegaste algo y lo detecto el evento "paste"');
});

// REMEMBER: El evento "cut" se activa cuando el usuario ha iniciado una acción de "corte" a través de la interfaz de usuario del navegador.
busqueda.addEventListener('cut', () =>{
    console.log('Cortaste algo y lo detecto el evento "cut"');
});

// REMEMBER: El evento "inpu" se dispara cuando el valor (value) de un elemento <input>, <select>, o <textarea> ha sido cambiado. 
document.addEventListener('input', () => {
    console.log('El evento "input" realiza todos los eventos anteriores a exepción del "blur"');
});

// NOTA: Lo ideal es saber que se esta escribiendo para asi poder mostrarlo en pantalla
//      mandarlo a una base de datos, etc. para ello.
// 
// | Aqui es donde va el elemento que deseamos  
// |        | Aqui va el metodo que realizara el los eventos 
// |        |                | Aqui va el evento que nosotros deseamos  
// |        |                |          | Aqui va la funcion por ende la podemos llamar 
// |        |                |          | como notrotros deseemos. Por lo regular se llama 
// |        |                |          | (e),(evt),(evento) o () "esto es como un 
// |        |                |          | estandar llamarlo de esas formas" 
// ejemplo.addEventListener('evento', (eventoQueEstaSucediendo) =>{
//     console.log('la magia del evento');
// });

// Ejemplos:
    // Posdata: Para que se vea mejor comento todo lo de arriba
// Opcion Uno
    busqueda.addEventListener('input', (e) => {
    console.log(e);
});

// Opcion Dos
busqueda.addEventListener('input', (evt) => {
    console.log(evt.type);
    // REMEMBER: que el "type" te dice que tipo de elemento estas trabajando
});

// Opcion Tres
busqueda.addEventListener('input', (evento) => {
    console.log(evento.target);
    // REMEMBER: que "target" nos indica sobre que input en especifico andamos trabajando.
});

// Opcion Cuatro
busqueda.addEventListener('input', (comoTuQuierasLlamarlo) => {
    console.log(comoTuQuierasLlamarlo.target.value);
    // REMEMBER: que ".target.value" te muestra lo que el usuario esta escribiendo
});