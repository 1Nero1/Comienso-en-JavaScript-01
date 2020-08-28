// Los "String" son cadenas de Text.
// Existen varias formas para declararlar.

// Primer forma
//es la forma más usada
let formaUno = 'Hola Mundo';
console.log(formaUno);

// Segundo forma
let formaDos = String('Hola Mundo Nuevamnete');
console.log(formaDos);

//Tercer forma
//es muy poco usada y este estring trae todas las letras de las palabras
let formaTres = new String('Hola Mundo otra vez');
console.log(formaTres);

/* Cuando creamos un String lo podemos hacer con comillas dobles ("") o simples ('').
Puede darse el caso de que necesitemos ingresar unas comillas dentro de otras
por ejemplo: Pantalla de 24" si lo usamos dentro de unas comillas simples ('') no
causa probelmas pero si las usamos dentro de comillas dobles ("") puede haber 
conflicto ejemplo: */

// Sin conflicto
let producto = 'Pantalla de 24"'

// Con conflictio
// let producto = "Pantalla de 24"";

/* Como evitamos eso?
para poder evitar el conflicto tendremos que cortar las comillas y para eso se usa (\)
ejemplo:
*/

let productoDos = " Pantalla de 24\" ";
console.log(productoDos);