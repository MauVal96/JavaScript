var nombre = "Mauricio", apellido = "Valadez";

//Funciones para strings
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompletoA = nombre + ' ' + apellido;
var nombreCompletoB = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.charAt(1) + nombre.charAt(2);
var subStr = nombre.substr(1,4);