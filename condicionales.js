// Fundamentos de JavaScript -- Condicionales
var carlos = {
    nombre: 'Carlos',
    apellido: 'Lopez',
    edad: 27,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: true,
    guitarrista: false,
    piloto: true
}

// Funcion con condiciones sobre las profesiones

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);

    if(persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero')
    }

    if(persona.cocinero) {
        console.log('Cocinero');
    }
    if(persona.cantante) {
        console.log('Cantante');
    }
    if(persona.dj) {
        console.log('DJ');
    }
    if(persona.guitarrista) {
        console.log('Guitarrista');
    }
    if(persona.piloto) {
        console.log('Piloto');
    }
}

// Funcion usando condiciones de comparacion

function imprimirMayorDeEdad(persona) {
    if(persona.edad > 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

 // Llamado a funciones

imprimirProfesiones(carlos);
imprimirMayorDeEdad(carlos);
imprimirMayorDeEdad({nombre: 'Juan', edad: 15});
