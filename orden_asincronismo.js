// Fundamentos de JavaScript -- Orden y asincronismo en peticiones

// Datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }; 

// Funcion Callback
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    // Peticion a la API
    $.get(url, opts, function (data, status) {
        console.log(`Hola, yo soy ${data.name}`);
        if(callback) {
            callback();
        }
    });
}

// Respuestas en orden definido al usar callbacks
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
       obtenerPersonaje(3, function () {
           obtenerPersonaje(4, function () {
               obtenerPersonaje(5, function () {
                   obtenerPersonaje(6, function () {
                       obtenerPersonaje(7);
                   });
               });
           });
       }); 
    });
});

// Tambien llamado callback Hell


    
