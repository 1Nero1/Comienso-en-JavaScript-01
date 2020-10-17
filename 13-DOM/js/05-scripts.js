// TODO: querySelectorAll

// REMEMBER: querySelectorAll es casi el mismo funcionamiento de "querySelector" solo que este te regresa el primer elemento que se encuentra, mientras que "querySelectorAll" te regresa todos los elementos que encuentre.
// Ejemplo:

// Con querySelector
const cards = document.querySelector('.card');
console.log(cards);

// Con querySelectorAll
const card = document.querySelectorAll('.card');
console.log(card);

// En caso de que no exista el elemento querySelectorAll mostrara una "NodeList" sin ningun dato
const noExiste = document.querySelectorAll('.NoExiste');
console.log(noExiste);

// REMEMBER: querySelectorAll cumple igual con todas las caractericas de "querySelector" que al igual cumple con la especificidad de CSS