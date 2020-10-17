// TODO: document

// REMEMBER: Con el objeto document se controla la página web y todos los elementos que contiene.

// Estos son algunos ejemplos de su uso:
let elemento;

// Nos selecciona bien todo el documento
elemento = document;
console.log(elemento);


// Nos selecciona tada la estructura o elementos que conforman nuestro HTML
elemento = document.all;
console.log(elemento);

// Nos selecciona el HEAD de HTML (Nos muestra todo su contenido).
elemento = document.head;
console.log(elemento);

// Nos selecciona el BODY de HTML (Nos muestra todo su contenido).
elemento = document.body;
console.log(elemento);

// Esto nos muestra el dominio de muestra pagina
elemento = document.domain;
console.log(elemento);

//TODO: Accediendo a formularios

    // Nos selecciona todos los formularios y nos muestra cuantos son.
    // REMEMBER: Esto nos retorna como un tipo de arreglo pero se llama HTMLCollection
    elemento = document.forms;
    console.log(elemento);

    // Como se dice el formulario es como un tipo de arreglo por lo tanto podemos ingresar como indice
    elemento = document.forms[0];
    console.log(elemento);
    
    // De igual manera podemos entrar por ID (Si lo tiene)
    elemento = document.forms[0].id;
    console.log(elemento);

    // De igual manera podemos entrar por Metodo (Si lo tiene)
    elemento = document.forms[0].method;
    console.log(elemento);
    
    // De igual manera podemos entrar por clasList (Si lo tiene)
    elemento = document.forms[0].classList;
    console.log(elemento);
    
    // De igual manera podemos entrar por action (Si lo tiene)
    elemento = document.forms[0].action;
    console.log(elemento);
    

    // Nos muestra todos los enlaces que tiene el documento
    elemento = document.links;
console.log(elemento);

// TODO: todo lo que tiene HTMLCollection se puede observar por metodos (como el formulario)

//  Ingresar como indice
elemento = document.links[4];
console.log(elemento);

//  Ingresar como clasList (Nos retorna las classes que tiene, como un arreglo)
elemento = document.links[4].classList;
console.log(elemento);

//  Ingresar como claName (Nos retorna todo como si fuer un String)
elemento = document.links[4].className;
console.log(elemento);

// Seleccionar Imagenes y nos muestra todas y cuantas son
elemento = document.images;
console.log(elemento);

// Seleccionar los scripts
elemento = document.scripts;
console.log(elemento);

// REMEMBER: con estos pequeños ejemplos podemos ver que podemos seleccionar todos los elementos que deseemos del HTML con JavaScript 