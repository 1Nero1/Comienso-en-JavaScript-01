// TODO: Eliminar elementos en el DOM

// Existen dos formas de eliminarlos elementos.

// La primer forma es eliminarlo por si mismo
// Ejemplo:
const primerElemnto = document.querySelector('a');
console.log(primerElemnto);
primerElemnto.remove(); // Ayuda a eliminar elementos que nosotros escojemos.

// Segunda Forma de eliminar
// Eliminar desde el padre
// Ejemplo:
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
// REMEMBER: que ".children" nos aydua a tener una referencia de los elementos que deceamos cambiar
console.log(navegacion.children);

// TODO:El método Node.removeChild() elimina un nodo hijo del DOM y puede devolver el nodo eliminado.
navegacion.removeChild(navegacion.children[2]); // Estamos Eliminando "Registro"