//TODO for ...in

// La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas.

// (for ...in) es igual que (for ...of) solo que "for ...in" sirve para recorrer objetos ya que si utilizamos "for ...of" nos mostrara el numero o su indice y vicervesa

// Ejemplo:
let persona = {
    nombre: "Maiky",
    edad: 34,
    sexo: "Hombre",
};

for(let caracteristicas in persona){
    console.log(caracteristicas); // Como podemos ver solo nos trae las llaves.
    console.log(`${persona[caracteristicas]}`); // Asi podemos obtener los valores.
};
console.log("====================================================================");
//TODO Por ES7 esta implrementando una forma mas para poder imprimir de una manera mas facil un objeto
// Como se planea usar?

//       |Aqui se colocan las llaves del objeto.
//       |     |Aqui se colocan los valores del las llaves.
//       |     |         |Aqui se coloca el metodo a utilizar (Simpre sera el mismo)
//       |     |         |              |Aqui se coloca el nombre del Objeto
for(let [llave,valor] of Object.entries(persona)){
    console.log(llave);
    console.log(valor);
};
// Esta es la forma en la que se espera de igual manera poder udar el "for ...of" cuando salga la autorizacion de ES7 (Recuerda que ahorita estamos en ES6).