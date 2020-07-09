// Fundamentos de JavaScript -- Async-Await

// Datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }; 

// Funcion para la peticion al API utilizando promesas
function obtenerPersonaje(id) {
    return new Promise( (resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail( () => {
            reject(id);
        });
    });
}

//  Funcion para el caso de error 
function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

// Creacion de la funcion asincrona utilizando Async y await

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];    
    var promesas = ids.map( id => obtenerPersonaje(id));

    // Codigo a ejecutar de forma asincrona
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch(id) {
        onError(id);
    }
}

// Llamado a la funcion
obtenerPersonajes();





