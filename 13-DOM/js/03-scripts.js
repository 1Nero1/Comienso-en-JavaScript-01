//TODO: getElementById

//REMEMBER: Devuelve el elemnto que tenga el ID que nosotros coloquemos

const formulario = document.getElementById('formulario');
console.log(formulario);

// Cuando no se encuentra el elemento
const noExiste = document.getElementById('NoExiste');
console.log(noExiste);
// Como podemos ver solo nos devuelve "null"

// TODO: En caso de que se encuentren dos elementos con el mismo ID (que eso seria mala practica de HTML ya que solo puede tener uno por documento...) solo regresara el primero que encuentre.