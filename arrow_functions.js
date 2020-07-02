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

var daniel = {
    nombre: 'Daniel',
    apellido: 'Lopez',
    edad: 20
}
 
const MAYORIA_EDAD = 18;

// Declaracion de funcion de forma expresiva, tambien
// conocidas como funciones anonimas

const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_EDAD;
}

// Metodo alternativo utilizando arrow functions

const MayorEdad = (persona) => {
    return persona.edad >= MAYORIA_EDAD;
}

// Forma reducida de la funcion anterior, valido cuando 
// solo se recibe un parametro y su unica linea es un return

const MayorEdadRed = persona => persona.edad >= MAYORIA_EDAD;

// Funcion anonima desestructurando el objeto

const MenorEdad = ({edad}) => edad < MAYORIA_EDAD;

// Pueden llamarse cualquiera de las dos y se tiene 
// el mismo efecto

function imprimirMayorDeEdad(persona) {
    if( esMayorDeEdad(persona) ) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso(persona) {
    if( !MayorEdad(persona) ) {
        console.log('ACCESO DENEGADO');
    }
}


// Llamado a las funciones 

imprimirMayorDeEdad(alberto);
imprimirMayorDeEdad(carlos);

console.log(MenorEdad(daniel));

permitirAcceso(alberto);

