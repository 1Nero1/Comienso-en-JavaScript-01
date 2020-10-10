//TODO: querySelector

// REMEMBER: querySelector es igual que CSS trabaja casi de la misma manera.
// Para colocar ID, clases son de la sigueinte forma:
// Los ID se colona con # (#formulario)
// Las Clases se colocan con un . (.hear)
// Podemos tener selectores especificos como en CSS

// REMEMBER: querySelector solo traera el primer elementeo que encuentre.

// Seleccionando una clase
let seccion = document.querySelector('.hacer');
console.log(seccion);

// Seleccionando un ID
let formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccioando el segundo cuadro de hospedaje
let segundoCuadro = document.querySelector('.hospedaje .card');
console.log(segundoCuadro);
// Como podemos observar nos muetra la primer imagen

// Con normas de CSS
segundoCuadro = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCuadro);
// Como podemos observar ahora si seleccionamos el segundo cuadro.

// Secciones especificas
let info = document.querySelector('.premium .info');
console.log(info);