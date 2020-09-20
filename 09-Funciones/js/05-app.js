// Parametros y Argumentos en Funciones

// Esta es una funcion simple dando a entender que tiene que ser con datos fijos
function suma(){ 
    console.log(2+2);
}
suma();
suma(20,30);
suma();
// Como podemos ver siempre se dara el mismo resultado aunque tenga valores diferentes


// Esta es una funcion compleja dando a enternder que es automatica ya que los datos o valores pueden ser datos y no fijos.
function sumar(a,b){ // "a" y "b" son parametros.
    console.log(a+b);
}
sumar(23,80); // "23" y "80" son argumentos.
sumar(1,8);
sumar(496,156);
// Como podemos ver aqui si podemos ingresar valores diferentes y nos da un resultado por cada uno y no es el mismo resultado


function hola(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}. Bienvenido!`);
}
hola("Maiky","Borrel");
hola("Maiky");
hola();
// Como podemos ver nos da undefined pero esto lo podemos arreglar con un condicionate, todo dependera de lo que estemos realizando.