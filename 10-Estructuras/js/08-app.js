//TODO Detener la ejecución de un if con una función
// Existen diferentes formas del uso de un if en cada una de ellas se usa de forma diferente
// Lo que se recomienda es usar un if de forma de mayor a menor, hacienod referencia de que el if con mayor importancia se coloque primero 
let ataque = 500;

// Esto es el uso comun
if(ataque > 400){
    console.log("Ëxcelente");
}
else if (ataque > 300){
    console.log("Muy buen ataque");
}

// Este es un uso no bueno pero se llega a encontar
if(ataque > 400){
    console.log("Ëxcelente");
}

if (ataque > 300){
    console.log("Muy buen ataque");
}

// Asi es Como se usa correctamente
// Uso de if dentro de una funcion
function pelea(){
    if(ataque > 400){
        console.log("Ëxcelente");
        return;
    }
    
    if (ataque > 300){
        console.log("Muy buen ataque");
        return;
    }
}
pelea();