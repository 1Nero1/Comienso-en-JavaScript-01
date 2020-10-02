//TODO switch
// El switch es  como el if solo que el switch es mas usado para cuando tenemos miltiples condiciones (poe asi decirlo 100)
// Ejemplo:

let valor = prompt ("Cual es tu metodo de pago?");

switch (valor){
    case 'efectivo': // Inicio de la validacion
        console.log(`Usted pagara con ${valor}`);
    break; //Indica fin de la validacion
    case 'tarjeta de debito':
        console.log(`Usted pagara con ${valor}`);
    break;
    case 'tarjeta de credito':
        console.log(`Usted pagara con ${valor}`);
    break
    default: //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        console.log(`El metodo de pago ${valor} no es valido`);
    break;
}
