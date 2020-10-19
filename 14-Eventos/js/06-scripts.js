// TODO: Qué es el Event Bubbling?

// NOTA: El "Event Bubbling" se ejecuta cunado tenemos en varias lados sierto tipo de eventos y cuando le damos click o hacemos algo (un evento) en un lugar especifico y los toda esa parte tiene eventos se realizaran todos los eventos y aqui es donde se aplica el "Event Bubbling".
// En otras palabras el "Event Bubbling" es como un problema ya que solo queremos hacer una acción pero se ejecutan todas a la vez.

// Ejemplo de Event Bubbling
const card = document.querySelector('.card');
const info = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

/*// Código:
// Aqui veremos el efecto Event Bubbling
card.addEventListener('click', ()=>{
    console.log('Clickeando card');
});
info.addEventListener('click', ()=>{
    console.log('Clickeando info');
});
titulo.addEventListener('click', ()=>{
    console.log('Clickeando titulo');
});
 */

// Evitando el Event Bubbling
    // Como vimos anteriormente existe el metodo "preventDefault" que nos ayudaba a detener en cierto punto la continuación del redireccionamiento
    
    // REMEMBER: El método "stopPropagation()" de la interfaz Event evita la propagación adicional del evento actual en las fases de captura y bubbling.

card.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Clickeando card');
});
info.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Clickeando info');
});
titulo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Clickeando titulo');
});