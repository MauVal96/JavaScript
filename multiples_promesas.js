// Fundamentos de JavaScript -- Promesas Multiples

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

// Arreglo de ids a consultar
var ids = [1, 2, 3, 4, 5, 6, 7];


// Funcion para crear el arreglo de promesas usando Array.map()
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id);
})

// Version alternativa usando arrow functions
var promesasArrow = ids.map( (id) => obtenerPersonaje(id));

// Llamado al arreglo de promesas usando el metodo Promise.all()

Promise.all(promesas).then( (personajes) => {
    console.log(personajes);
}).catch(onError);

