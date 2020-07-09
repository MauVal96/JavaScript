// Fundamentos de JavaScript -- Funciones como Parametro

// Declaracion de la clase Persona
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    
    }
    saludar(fun) {
        // Equivalente nombre = this.nombre,
        // apellido = this. apellido 
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fun) {
            fun(nombre, apellido, false);
        }
    }
    soyAlto() {
        return this.altura >= 1.8;
    }
}

// Declaracion clase Desarrollador
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar(fun) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolador/a`);
        if(fun) {
            fun(nombre, apellido, true);
        }
    }
}

// Funcion que se envia como parametro
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev) {
        console.log('No sabía que eras desarrolador');
    }
}

// Creacion de los objetos
var carlos = new Persona('Carlos','Ojeda', 1.75);
carlos.saludar();

var erika = new Persona('Erika', 'Ramírez', 1.65);
erika.saludar(responderSaludo);

var hector = new Desarrollador('Hector', 'Calderon', 1.82);
hector.saludar(responderSaludo);