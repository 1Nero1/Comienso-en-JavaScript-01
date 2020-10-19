// TODO: Eventos al dar scroll con el mouse

// NOTA: los eventos del SCROLL trabajan mediante la ventana global pare ello se escribe "window"
// REMEMBER: "window" te muestra una lista detallada de todas sus funcionalidades

// REMEMBER: "scrolling" detecta cuantas veces haces scrolling
window.addEventListener('scroll' , () =>{
    console.log('scrolling');
});

// REMEMBER: "scrollY" Retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical.
window.addEventListener('scroll', ()=>{
    const scrollPixeles = window.scrollY;

    console.log(scrollPixeles);
});

// Como es que se crea animacion?
// La animacion se crea mediante herramientas de CSS y posicionamiento del scroll

// // Como consigo el posicionamiento de CSS?
// Se necesitan dos puntos para obtener esas animaciones:
// 1.- Saber donde quieres que se realice 
// 2.- Ubicacion pero eso se optiene mediente el método "getBoundingClientReact"
window.addEventListener('scroll', ()=>{
    // Consiguienodo el lugar deceado
    const destino = document.querySelector('.destinos');
    const ubicacion = destino.getBoundingClientRect(); // Esto muestra mucha información
    
    // NOTA: para tener mas precisión con este manejo dejamos visible la ubucacion y lo vamos acomodando en otra balabras haciendo 'debugin'
    // console.log(ubicacion); // Muestra mucha información
    if(ubicacion.top < 100){
        console.log('ya llegaste');
    }
    else{
        console.log('muevete un poco más')
    }
});