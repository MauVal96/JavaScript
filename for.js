// Fundamentos de JavaScript -- Ciclo For

var daniel = {
    nombre: 'Daniel',
    apellido: 'Lopez',
    edad: 20,
    peso: 68
}

const VARIACION_PESO = 0.2;

// Funciones para modificar el peso

const aumentoPeso = (persona) => {
    persona.peso += VARIACION_PESO;
}

const perderPeso = persona => persona.peso -= VARIACION_PESO;


// Inicio del programa

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso}kg`);

// Ciclo para simular un año en el que se aumenta o baja de peso

for(var i = 1; i <= 365; i++) {
    var rand = Math.random();

    if(rand < 0.25) {
        // Aumento de peso
        aumentoPeso(daniel);
    } else if(rand < 0.5) {
        // Perdida de peso
        perderPeso(daniel);
    }
}

console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)}kg`);
