// TODO: Traversing de DOM

// Se le conoce como "Traversing de DOM" cuando te mueves en los diferentes elementos en JavaScrict.

// Selecciona la etiqueta "nav" de HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

// REMEMBER: "childNodes" nos mostrara todos los elementos que se encuentren 
console.log(navegacion.childNodes); // Los espacios en blanco son conciderados elementos.
    // Como podemos observar cuando seleccionamos o bien nos posicionamos en "text" no nos selecciona nada, mientras que si nos colocamos en "a" selecciona el elemento, a eso se refiere que los expacios en blanco se concideran elementos.

// REMEMBER: 'children' Nos mostrara todos los elementos verdaderos o que si existan.
console.log(navegacion.children); // Los espacios en blanco NO son conciderados elementos.
    // Como podemos observar solo nos muestra los elementos que se colocaron en el HTML y descarta los espacios en blanco a diferencia del otro elemento.

// Como en un arreglo podremos entrar al elemnto que nosotros asi lo deciemos
console.log(navegacion.children[1]);

// Identificacion (Tendremos más informacion si los buscamos el mozilla)
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType); // si se necesita más informacion buscar en la documentación.

console.log('============================================================');
// REMEMBER: "firstElementChild" Nos regresa el primer Elemento
console.log(navegacion.firstElementChild);

// REMEMBER: "lastElementChild" Nos regresa el ultimo Elemento
console.log(navegacion.lastElementChild);

console.log('============================================================');
//TODO: EJEMPLO DE Traversing de DOM
//REMEMBER: Traversing Padre a Hijo
// Ingresa al titulo de el primer card y modificalo (paso por paso).

    // Seleccionare el elemento que quiero trabajar
    const card = document.querySelector('.card') // Uso "querySelector" ya que solo quiero trabajar con el primero.
    console.log(card); // Me ayuda a daber que estoy haciendo
    
    // Quiero obtener los elemntos de ese card
    console.log(card.children); // Este elemento lo uso porque solo quiero que me regrese las etiquetas de HTML

    // Quiero aceder solo a info
    console.log(card.children[1]); // Selecciona el 1 ya que gracias a "children" se en que posicion esta lo que necesito.

    // Ahora solo deceo ingresar a el titulo
    console.log(card.children[1].children[1]);

    // Ahora solo deceo agregar a el texto
    console.log(card.children[1].children[1].textContent);

    // como ya se como llegar ahora lo modifico.
    nuevo = card.children[1].children[1].textContent = 'Si lo pude hacer.'; // ahora lo muestra en pantalla

    // Modificando la imagen
    console.log(card.children[0]);

    // Cambiando Imagen
    card.children[0].src = "img/hacer4.jpg"
// Fin de Traversing padre a hijo.

// REMEMBER: Traversing Hijo a Padre
    // Ejemplo: ubicado en el "card" llega a "contenido contenedor" (Paso a Paso)

    console.log('llegaremos a contenido contenedor');
    console.log(card); // Recuerda que card ya esta (fue en el primer traversing)

    // El padre de card es contenedor-cards
    console.log(card.parentElement);

    // El padre de contenedor-cards es hacer
    console.log(card.parentElement.parentElement);

    // El padre de hacer es contenido contenedor
    console.log(card.parentElement.parentElement.parentElement);
    console.log('Llegamos al padre que queriamos llegar');
// Fin de Traversing hijo a padre

// REMEMBER: Traversing entre hermanos. (primero)
    // Ejemplo: Muevete entre el card uno al card cuatro

    console.log('card uno');
    console.log(card); // Recuerda que estamos enel primer card

    // Con "nextElementSibling" nos movemos de arriba hacia abajo
    console.log('card dos');
    console.log(card.nextElementSibling);

    console.log('card tres');
    console.log(card.nextElementSibling.nextElementSibling);
    
    console.log('card cuatro');
    console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);
// Fin de Traversing entre hermanos

// REMEMBER: Traversing entre hermanos. (ultimo)
    // Ejemplo: Muevete entre card de abajo hacia arriba (del ultimo al primero)
    const ultimoCard = document.querySelector('.card:nth-child(4)');
    console.log('Ultimo card');
    console.log(ultimoCard);
    
    console.log("Tercer card");
    console.log(ultimoCard.previousElementSibling);
    
    console.log("Segundo card");
    console.log(ultimoCard.previousElementSibling.previousElementSibling);
    
    console.log("primero card");
    console.log(ultimoCard.previousElementSibling.previousElementSibling.previousElementSibling);
// Fin de Traversing entre hermanos