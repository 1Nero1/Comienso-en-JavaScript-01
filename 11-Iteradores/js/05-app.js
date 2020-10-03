//TODO Do While 
// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

// El "Do While" es igual que el "for" y "while", solo que este bucle a diferencia de los demás se ejecuta almenos una vez en todo el proceso (Esto quiere decir que si esta mal la condicion "do while" lo ejecutara una vez).
// Ejemplo:

let i = 0; // Inicio del "do while"
do{
    console.log(`Número ${i}`);

    i++; // Fin o incremento del "do while"
}while(i<10); // Condicion del "do while"

console.log("====================================================");
// Ejecutandoce una vez (o por error)
let j = 1000; // Inicio del "do while"
do{
    console.log(`Número ${j}`);

    j++; // Fin o incremento del "do while"
}while(j<10); // Condicion del "do while"

// Como podemos observar se ejecuto pero mostando el valor final, Esto es lo que hace "do while"