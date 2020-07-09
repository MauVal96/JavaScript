// Fundamentos de JavaScript -- Promesas

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

// Llamado a la funcion y resolucion de promesa
 
obtenerPersonaje(1).then( (data) => {
    console.log(`El personaje es ${data.name}`);
}).catch(onError);
