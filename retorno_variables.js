// Fundamentos de JavaScript -- Funciones que retornan variables

var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramírez',
    edad: 28
}

var alberto = {
    nombre: 'Alberto',
    apellido: 'Pérez',
    edad: 14 
}
 
const MAYORIA_EDAD = 18;

// Funcion para validar, devuelve el boolean como respuesta

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_EDAD;
}

function imprimirMayorDeEdad(persona) {
    if( esMayorDeEdad(persona) ) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirMayorDeEdad(alberto);
imprimirMayorDeEdad(carlos);