// Métodos con propiedad o añadir funciones en un objeto

const objetoFuncion = { // Esto es un Objeto
    estoEsUnaFuncion: function(){ //Inicio de la funcion
//  Esto es una Llave
//                    Esto es un valor (pero nosotros lo isimos una funcion)
        console.log(`Esto es una funcion dentro de un Objeto`);
    }, // Fin de la funcion

};
objetoFuncion.estoEsUnaFuncion();

// Hacer un repoductor de musica y unas playlist.
const reproductor = {
    reproducir: function(nCansion){
        console.log(`Reproduciendo musica ${nCansion}`);
    },
    pause: function(){
        console.log("Pausando...");
    },
    playlist: function(listaMusical){
        console.log(`Creando la playlist ${listaMusical}`);
    },
};

reproductor.reproducir(15);
reproductor.pause();
reproductor.playlist("Rock");
reproductor.playlist("Metal");
reproductor.playlist("Nose");

// Metodo que nos permite ver lo que trae un Objeto
console.log(Object.entries(reproductor));

// Crea borrar y crea la opcion de reproducir la play list

reproductor.borrrar = function(nCansion) {
    console.log(`borrar la cancion ${nCansion}`);
};

reproductor.reproducirPlaylist = function(listaMusical){
    console.log(`reproducir la playlist ${listaMusical}`);
};

reproductor.borrrar(15);
reproductor.reproducirPlaylist("Nose");

// Metodo que nos permite ver lo que trae un Objeto
console.log(Object.entries(reproductor));

