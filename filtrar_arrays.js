// Fundamentos de JavaScript -- Arrays

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

const esAlta = (persona) => {
    return persona.altura >= 1.8;
}


// Creacion de un array
var personas = [carlos,dario,daniel,alberto,laura,paula];

// Funcion de filtrado
var personasAltas = personas.filter(esAlta);

// Forma alternativa de la funcion filter usando funciones
// anonimas y desestructurando el objeto
var personasBajas = personas.filter(({altura}) => {
    return altura < 1.8;
})


console.log(personasAltas);
console.log(personasBajas);