// Fundamentos de JavaScript -- Objetos

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

// Enviar el atributo utilizando operador '.'
function imprimirConOperador(nombre){
    console.log(nombre.toUpperCase());
}

// Enviar el objeto completo 
function imprimirDesdeObjeto(persona){
    console.log(persona.nombre.toUpperCase());
}

// Enviar unicamente un atributo de un objeto
function imprimirNombreMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

// Ejemplo operador '.'
imprimirConOperador(carlos.nombre);

// Ejemplo objeto 
imprimirDesdeObjeto(dario);

// Ejemplos atributo
imprimirNombreMayusculas(carlos);
imprimirNombreMayusculas(dario);
imprimirNombreMayusculas({nombre: 'Pepito'});