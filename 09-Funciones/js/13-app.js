// Arrow Functions en el Reproductor de Música

// Estamos haciendo menos codigo en la practica 09-app.js con arrow function en caso de ver como se ve el codigo original dirigirse al archivo antes mencionado

// Hacer un repoductor de musica y unas playlist.
const reproductor = {
    cansion: '', // Este sirve para el ejemplo de set y get
    reproducir: (nCansion) => console.log(`Reproduciendo musica ${nCansion}`),
    pause: () => console.log("Pausando..."),
    playlist: (listaMusical) => console.log(`Creando la playlist ${listaMusical}`),
    borrrar: (nCansion) => console.log(`borrar la cansion ${nCansion}`),
    reproducirPlaylist: (listaMusical) => console.log(`reproducir la playlist ${listaMusical}`),

    //TODO Hay otra forma de realizar esto y es el "set" y "get" ya no es muy usada pero aun es necesaria 
    // Ejemplo:
    set nuevaCancion(cansion){
        this.cansion = cansion;
        console.log(`Se agrego la cansion ${cansion}`);
    },
    get optenerCancion(){
        console.log(`${this.cansion}`);
    },
};

// SET y GET
reproductor.nuevaCancion = "one punchman";
reproductor.optenerCancion; // Como este es get no necesita de los ()


// Arrow Function
reproductor.reproducir(15);
reproductor.pause();
reproductor.playlist("Rock");
reproductor.playlist("Metal");
reproductor.playlist("Nose");
reproductor.borrrar(15);
reproductor.reproducirPlaylist("Nose");

// Metodo que nos permite ver lo que trae un Objeto
console.log(Object.entries(reproductor));


