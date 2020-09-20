// Funciones que pasan valores

// como sabemos las fucniones pueden ser tan complejas como deceamos pero nos centraremos en lo que consideraremos simple y complejo

// Función simple
function suma(){
    console.log(2+2);
};
suma();

// Funcion compleja
function sumas(a,b){
    console.log(a+b);
};
sumas(15,15);

// Funcion más avanzada 
let total = 0; // Esto se le conoce como acumulador 

// Cada vez que se mande a llamar esta funcion se ira sumando
function carritoDeCompras(precio) {
    return total += precio;
};

carritoDeCompras(516);
carritoDeCompras(156);

console.log(`tu compra es de ${total}`);

// De igual forma podemos hacer mas cosas como en ete ejemplo darle un impuedto del 15%
function impuesto(total) {
    return total * 1.15;
};
const impuestoTotal = impuesto(total)

console.log(`Tú total a pagar es de ${impuestoTotal}`);
