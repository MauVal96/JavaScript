// Fundamentos de JavaScript -- Parametros por valor y por referencia

// Objetos con elementos tipo "clave: valor"
var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramírez',
    edad: 28
}

var dario = {
    nombre: 'Darío',
    apellido: 'Márquez',
    edad: 26 
}

// Funcion con objeto como parametro, se envia por referencia
function cumplePorParametro(persona) {
    persona.edad++;
}

// Objeto sin modificar
console.log(dario);

// Objeto despues de la ejecucion de la funcion
cumplePorParametro(dario);
console.log(dario);

// Funcion con variable como parametro, se envia por valor
function cumplePorValor(edad) {
    edad++;
}

// Objeto sin modificar
console.log(carlos)

// Objeto despues de la ejecucion de la funcion
cumplePorValor(carlos.edad);
console.log(carlos);

// Alternativa de funcion para enviar un objeto como parametro
function cumpleObjeto(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

// Llamada a funcion alternativa
var carlosViejo = cumpleObjeto(carlos);
console.log(carlosViejo);






