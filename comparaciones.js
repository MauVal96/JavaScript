// Fundamentos de JavaScript -- Comparaciones
var x = 4, y = '4';

// Comparacion de valor '=='
console.log(x == y);

// Comparacion de valor y tipo '==='
console.log(x === y);

var carlos = {
    nombre: 'Carlos'
}

var otraPersona = {
    nombre: 'Carlos'
}

// Comparacion de objetos 'false'
console.log(carlos == otraPersona);
console.log(carlos === otraPersona);

var personaNueva = carlos;

// Comparacion de objetos 'true'
console.log(carlos == personaNueva);
console.log(carlos === personaNueva);

// Los objetos sera iguales en una comparacion 
// cuando apuntan a la misma direccion de memoria