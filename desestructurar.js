// Fundamentos de JavaScript -- Desestructurar Objetos

// Objetos con elementos tipo "clave: valor"
var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramírez',
    edad: 28
}

var dario = {
    nombre: 'Darío',
    apellido: 'Márquez',
    edad: 26 
}


// Funciones que desestructura un objeto
function imprimirNombreMayusculas(persona) {
    // var nombre = persona.nombre equivale a:
    var {nombre} = persona
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
    // var nombre = persona.nombre equivale a:
    var {nombre} = persona;
    // var edad = persona.edad equivale a:
    var {edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

// Ejemplos de llamada a imprimirNombreMayusculas
imprimirNombreMayusculas(dario);
imprimirNombreMayusculas(carlos);


// Ejemplos de llamada a imprimirNombreYEdad
imprimirNombreYEdad(dario);
imprimirNombreYEdad({nombre: 'Juan', edad: '14'});