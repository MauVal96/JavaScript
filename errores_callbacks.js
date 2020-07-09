// Fundamentos de JavaScript -- Manejo de errores con callbacks

// Datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }; 

// Funcion Callback
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    // Peticion a la API
    $.get(url, opts, callback).fail(function () {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
    });
}

// Respuestas en orden definido al usar callbacks
obtenerPersonaje(1, function (data) {
    console.log(`Hola, yo soy ${data.name}`);
    
    obtenerPersonaje(2, function (data) {
        console.log(`Hola, yo soy ${data.name}`);
        
        obtenerPersonaje(3, function (data) {
            console.log(`Hola, yo soy ${data.name}`);
            
            obtenerPersonaje(4, function (data) {
                console.log(`Hola, yo soy ${data.name}`);
                
                obtenerPersonaje(5, function (data) {
                    console.log(`Hola, yo soy ${data.name}`);
                    
                    obtenerPersonaje(6, function (data) {
                        console.log(`Hola, yo soy ${data.name}`);
                        
                        obtenerPersonaje(7, function (data) {
                            console.log(`Hola, yo soy ${data.name}`);
                        });
                   });
               });
           });
       }); 
    });
});

// Tambien llamado callback Hell


    
