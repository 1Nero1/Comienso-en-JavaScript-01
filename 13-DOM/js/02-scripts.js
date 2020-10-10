//TODO: getElementsByClassName

//REMEMBER: De esta forma seleccionaremos elementos de HTML para JavaScript

//          | Simpre ira document ya que es como mandamos a llamar un elemento de HTML
//          |                               | Aqui se coloca el nombre de la clase que se coloco en HTML y que por ende es la que queremos utilizar
let heder = document.getElementsByClassName('header');
console.log(heder);

let hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez
let contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si la clase no existe
let noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste);
// Como podemos ver no, nos trae nada es un arreglo vacio

// REMEMBER: Este metodo o esta forma de llamar los elemento de HTML es el más anitiguo o menos usado en dia de hoy. Ya que este una sintaxis familiar al de (PHP) por que es SET y GET, Asi que en JavaScript ya no es tan usada. 