//TODO While Loop
// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

// El while es como un for pero no se ejecutara a menos que tenga una sentencia y esta misma sea correcta o este entre sus parametros
// Ejemplo: si de decea crear una lista del uno al cien pero "while" no se ejecutara ya que pasa de sus parametros.

let i = 0 // Inicio de While 
while(i < 10){// Condicion del While
    console.log(`Número ${i}`);


    i++ // Fin del While
}

/* 
// Como no se ejecutara
let i = 100 // Inicio de While 
while(i < 10){// Condicion del While
    console.log(`Número ${i}`);


    i++ // Fin del While
}
 */

// Ejercicio

// Crea una lista del uno al cien y muestra cuales son PAR y ciales son IMPAR

let i = 1; // Inicio del While
while(i <= 100){// Condicion del While
    if(i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    }
    else{
        console.log(`El número ${i} es IMPAR`);
    }

    i++; // Fin del While
}