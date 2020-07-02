// Fundamentos de JavaScript -- Ciclos Do While
var contador = 0;

const llueve = () => {
    return Math.random() < 0.25;
}

// Estructura ciclica que garantiza al menos una ejecucion de su codigo
do {
    contador++;
} while ( !llueve() );

if( contador === 1) {
    console.log(`Fui a ver si llovia ${contador} vez`);
} else {
    console.log(`Fui a ver si llovia ${contador} veces`);
}
