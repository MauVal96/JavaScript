// Fundamentos de JavaScript -- Alcance de las funciones

// Variables de alcance global
var nombre = 'Mauricio';

// Funcion utilizando variables globales (modifica la variable recibida)
function imprimirNombreMayusculas() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayusculas();

// Funcion usando variables locales (no modifica la variable recibida)
function imprimirNombreMinusculas(nombre) {
    nombre = nombre.toLowerCase();
    console.log(nombre);
}

imprimirNombreMinusculas(nombre);