// Fundamentos de JavaScript -- Reduccion de Arrays

var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramírez',
    edad: 28,
    altura: 1.71,
    cantidadDeLibros: 91
}

var dario = {
    nombre: 'Darío',
    apellido: 'Márquez',
    edad: 26,
    altura: 1.85,
    cantidadDeLibros: 182
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Lopez',
    edad: 20,
    altura: 1.67,
    cantidadDeLibros: 90
}

var alberto = {
    nombre: 'Alberto',
    apellido: 'Pérez',
    edad: 14,
    altura: 1.75,
    cantidadDeLibros: 132
}

var laura = {
    nombre: 'Laura',
    apellido: 'Romo',
    edad: 26,
    altura: 1.82,
    cantidadDeLibros: 78
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrera',
    edad: 31,
    altura: 1.64,
    cantidadDeLibros: 111
}

// Creacion de un array
var personas = [carlos,dario,daniel,alberto,laura,paula];

// Conteo de libros iterando sobre el arreglo
var conteo = 0;
for(var i = 0; i < personas.length; i++) {
    conteo += personas[i].cantidadDeLibros;   
}

// Conteo de libros usando array.reduce(funcion, valor_inicial)
const reductor = (conteo, personas) => {
    return conteo + personas.cantidadDeLibros;
}

var totalLibros = personas.reduce(reductor, 0 );

// Resultados
console.log(`En total todos tienen ${conteo} libros`);

console.log(`En total todos tienen ${totalLibros} libros`);

