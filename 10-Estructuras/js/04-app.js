// Operador Mayor, Menor e Igual que y else If

// Sabemos que el Operador Mayor y Menor que nos ayuda para saber ciertos puntos pero Que passa si es igal a lo que se comprara? En este caso tendremos un error porque sean iguales los valores y para evitar este tipo dectuaciones podemos agregar el Mayor e Igual 
// Ejemplo

let compra = 500;
const precio = 500;

// sin el igual
if(compra > precio){
    console.log("Si puedes comprar");
}else{
    console.log("No puedes comprar");
}

// con el igual
if(compra >= precio){
    console.log("Si puedes comprar");
}else{
    console.log("No puedes comprar");
}

//TODO Else If
// Es como buscar cajas llenas. Else If va ir checando validacions una por una hasta que su valizacion sea cumplida. En caso de que todas las valizaciones sean cumplidas solo tomara la primera que encuentre.
let tarjetaDebito = true;
let tarjetaCredito = true;
compra = 1;

// Entrando a la segunda validacion
if(compra > precio){
    console.log("Si puedes comprar");
}
else if(tarjetaDebito === true){
    console.log("Aun puedes comprar");
}
else if(tarjetaCredito === true){
    console.log("Puedes comprar a 6 memses sin intereces");
}
else{
    console.log("No puedes comprar");
}


// Entrando a la tercera validacion
tarjetaDebito = false;
if(compra > precio){
    console.log("Si puedes comprar");
}
else if(tarjetaDebito === true){
    console.log("Aun puedes comprar");
}
else if(tarjetaCredito === true){
    console.log("Puedes comprar a 6 memses sin intereces");
}
else{
    console.log("No puedes comprar");
}


// Todas la validacions se cumplen
compra = 1000;
tarjetaDebito = true;

if(compra > precio){
    console.log("Si puedes comprar");
}
else if(tarjetaDebito === true){
    console.log("Aun puedes comprar");
}
else if(tarjetaCredito === true){
    console.log("Puedes comprar a 6 memses sin intereces");
}
else{
    console.log("No puedes comprar");
}
