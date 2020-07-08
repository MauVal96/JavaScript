// Fundamentos de JavaScript -- Herencia prototipal

// Funcion para crear la herencia
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

// Declaracion del prototipo Persona (Padre)
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura >= 1.8;
}


// Declaracion del prototipo Desarrolador (Hijo)
function Desarrollador(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Herencia prototipal
heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`);
}


// Creacion de los objetos
var carlos = new Persona('Carlos','Ojeda', 1.75);
carlos.saludar();

var erika = new Desarrollador('Erika', 'Ramírez', 1.86);
erika.saludar();