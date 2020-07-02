// Fundamentos de JavaScript -- Ciclo While

var daniel = {
    nombre: 'Daniel',
    apellido: 'Lopez',
    edad: 20,
    peso: 68
}

var diasTranscurridos = 0;

const VARIACION_PESO = 0.3;
const META_PESO = daniel.peso - 3;

// Funciones para modificar el peso

const aumentoPeso = (persona) => {
    persona.peso += VARIACION_PESO;
}

const comeMucho = () => {
     return Math.random() < 0.3;
}

const perderPeso = persona => persona.peso -= VARIACION_PESO;
const hacerDeporte = () => Math.random() < 0.4;

// Inicio del programa

console.log(`Al inicio del regimen ${daniel.nombre} pesa ${daniel.peso}kg`);

// Ciclo para simular el tiempo de regimen alimenticio

while( daniel.peso > META_PESO) {
    // Instruccion para depurar
    //debugger

    if(comeMucho()) {
        aumentoPeso(daniel);
    } 
    
    if(hacerDeporte()) {
        perderPeso(daniel);
    }

    diasTranscurridos++;
}

console.log(`Después de ${diasTranscurridos} dias ${daniel.nombre} pesa ${daniel.peso.toFixed(1)}kg`);
