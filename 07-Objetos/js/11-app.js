// Funciones en Objetos y acceder a sus valores

// QUE ES "this"?
// Sirve para obtener los valores que esten es la function.


    // Ejemplo: Imprimeme todo sin llamar al objeto como global
    // console.log(persona); //Esto no esta permitido
    
    // forma comun
    const persona = {
        nombre: "Maiky",
        edad: "32",
    };
    console.log(persona.nombre);
    console.log(persona.edad);

    // Sin this
    let nombre = "Mariana";

    const personaDos = {
        nombre: "Nadya",
        edad: "27",
        imprimir: function(){
            return nombre; // nos debe de traer a Nadya
        },
    };
    console.log(personaDos.imprimir());
    // Como podemos observar nos trajo a Mariana cuando devio de traernos a Nadya para eso usamos la lapabra reservada "this"

    // Con this
    const personaTres = {
        nombre: "Nadya",
        edad: "27",
        imprimir: function(){
            return this.nombre; // Nos debe de traer a Nadya
        },
    };
    console.log(personaTres.imprimir());
    // Como podemos ver en este caso si nos trajo a Nadya