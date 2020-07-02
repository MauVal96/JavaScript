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
    altura: 1.80 
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
    altura: 1.60
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrera',
    edad: 31,
    altura: 1.64
}

// Creacion de un array

var personas = [carlos,dario,daniel,alberto,laura,paula];

// Acceder a un elemento

console.log(personas[0]);
console.log(personas[0].altura);
console.log(personas[0]['edad'])

// Iterar sobre un arreglo con un ciclo for

for(var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}m`)
}