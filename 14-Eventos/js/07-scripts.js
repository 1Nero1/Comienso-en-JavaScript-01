// TODO: Prevenir Event Bubbling con Delegation

// REMEMBER: Delegation, es como ir clickeadno varios puntos pero cuando se clickee en un punto en especifico realize una acción que notros indiquemos.
// Ejemplo:

// Delegation
const card = document.querySelector('.card');
// console.log(card);

card.addEventListener('click',evento => {
    // console.log('clickeando...'); // Primero verificamos que si funcione
    // console.log(evento.target); // Ya cambiamos () por evento
    console.log(evento.target.classList); // Buscamos que debuelva las clases de los elemtos
    // UNA VAZ OBTENIDO ESO PODEMOS SER ESPECIFICOS Y CUANDO CLICKEMOS ESA PARTE NOS MUESTRE UN MENSAJE.
    if(evento.target.classList.contains('card')){
        console.log('Haz clickeado en card');
    }
    if(evento.target.classList.contains('titulo')){
        console.log('Haz clickeado en titulo');
    }
    if(evento.target.classList.contains('categoria','consierto')){
        console.log('Haz clickeado en categoria');
    }
    if(evento.target.classList.contains('precio')){
        console.log('Haz clickeado en precio');
    }
    

});

// REMEMBER: target, es un metodo que debuelve el elemento que fue desencadenadó, en otras palabras "target" funciona para devolver es ente caso lo que nostros estamos clickeando.
// NOTA: target sirve o es más usado para Delegation.
// REMEMBER: el método contains() de la clase String, que devuelve true o false según si una cadena contiene o no otra cadena.
