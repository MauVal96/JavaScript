// Fundamentos de JavaScript -- Transformar Arrays

var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramírez',
    edad: 28,
    altura: 1.71
}

var dario = {
    nombre: 'Darío',
    apellido: 'Márquez',
    edad: 26,
    altura: 1.85
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Lopez',
    edad: 20,
    altura: 1.67
}

var alberto = {
    nombre: 'Alberto',
    apellido: 'Pérez',
    edad: 14,
    altura: 1.75
}

var laura = {
    nombre: 'Laura',
    apellido: 'Romo',
    edad: 26,
    altura: 1.82
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrera',
    edad: 31,
    altura: 1.64
}

// Funcion para modificar un objeto
const pasarAlturas = (persona) => {
    return {
        ...persona,
        altura: persona.altura*100
    }
}

// Arreglo de objetos
var personas = [carlos,dario,daniel,alberto,laura,paula];

var personasCms = personas.map(pasarAlturas);

console.log(personasCms);