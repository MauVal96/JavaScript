// Fundamentos de JavaScript -- Callbacks

// Datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id','1')}`;
const opts = { crossDomain: true }; 

// Funcion Callback
const onResponse = function (data, status) {
    // Array de parametros recibidos
    // console.log(arguments); 
    console.log(`Hola, yo soy ${data.name}`);
}

// Peticion a la API
$.get(lukeUrl, opts, onResponse);
    
