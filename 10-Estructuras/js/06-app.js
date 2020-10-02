//TODO Operador && para revisar que cumplan dos o mas condiciones
// Nos ayuda para validar condiciones que necesitemos en una misa para no crear mas codigo inecesario
// Ejemplo:

let esUsuario = true;
let puedeComprar = true;

// Aqui indicaremos si puede o no comprar
if(esUsuario && puedeComprar){
    console.log("Puedes Comprar");
}
else{
    console.log("No puedes comprar");
}

// Como podemos saber si es Usuario o no puede puedeComprar
puedeComprar = false;

if(esUsuario && puedeComprar){
    console.log("Puedes Comprar");
}
else if(!esUsuario){ //REMEMBER el simbolo ! nos ayuda a buscar lo contrario a lo que indica en este caso sabemos que "es usurio" pero a agregar !usuario estamos indicando que "no es usuario"
    console.log("No eres usuario. Puedes crear una cuenta");
}
else if(!puedeComprar){
    console.log("No puedes realizar la compra");
}
else{
    console.log("No puedes comprar");
}

// Que pasa si no es ninguna?
// en este caso podemos agregar otra opcion pero como hemos escritoesta bien solo habria qeu cambiar el ultimo mansaje ya que indica que no es ningano de las condiciones que le dimos
esUsuario = false;
puedeComprar = false;

if(esUsuario && puedeComprar){
    console.log("Puedes Comprar");
}
else if(!esUsuario){ 
    console.log("No eres usuario. Puedes crear una cuenta");
}
else if(!puedeComprar){
    console.log("No puedes realizar la compra");
}
else if (!esUsuario && !puedeComprar){
    console.log("No eres usuario y no tiene fondos suficientes");
}

// Como podemos ver en este momento no es ninguno por lo tanto deberia entrar a la ultmima opcion pero no es el caso.
// En este momento nos podriamos llevar horas intentando averiguar el error (pero esta bien)
// Entonces para poder solucionar un codigo que esta bien o en este caso que sabemos esta bien pero no entra como deceamos lo unico que debemos de realizar es cambiarlo de posicion
// Colcar el que tiene las dos o mas condiciones al inicio o de forma decendernte (3,2,1) y asi estara resuleto.
if(esUsuario && puedeComprar){
    console.log("Puedes Comprar");
}
else if (!esUsuario && !puedeComprar){
    console.log("No eres usuario y no tiene fondos suficientes");
}
else if(!esUsuario){ 
    console.log("No eres usuario. Puedes crear una cuenta");
}
else if(!puedeComprar){
    console.log("No puedes realizar la compra");
}