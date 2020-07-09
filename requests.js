// Fundamentos de JavaScript -- Peticiones multiples

// Datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }; 

// Funcion Callback
const onResponse = function (data, status) {
    // Array de parametros recibidos
    // console.log(arguments); 
    console.log(`Hola, yo soy ${data.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    // Peticion a la API
    $.get(url, opts, onResponse);
}

// Las respuestas no tienen un orden definido
// debido a que son asincronicas
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);


    
