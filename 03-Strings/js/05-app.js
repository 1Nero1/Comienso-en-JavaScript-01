let producto = "Monitor curvo de 20 pulgadas";

//El metodo ".replace()" nos permite remplazar un texto que deseamos por otro que queremos
console.log(producto);
console.log(producto.replace(" pulgadas","\""));
console.log(producto.replace("20","24"));

//El metodo ".slice(donde empezar a cortar , donde finalizar de cortar)" no permite cortar una cadena de texto
console.log(producto.slice(0,10));
console.log(producto.slice(8)); //sino se le da el segundovalor cortara los primeros caracteres que se le dieron
console.log(producto.slice(2,1)); //en esta caso no hace nada JavaScript


//alternativa a ".slice(0,0)"
console.log(producto.substring(0,10));
//En este caso "substring" es mas inteligente que "slice" ya que es esta funcion intercambia los valores si es perimer valor es mayor que el segundo.
console.log(producto.substring(2,1));


//Metodo ".charAt()" optiene el caracter que deseamos o señalado
console.log(producto.charAt(2));