// Fundamentos de JavaScript -- Clases en JavaScript

// Declaracion de la clase Persona
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto() {
        return this.altura >= 1.8;
    }
}

// Declaracion clase Desarrollador usando herencia
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`);
    }
}

// Creacion de los objetos
var carlos = new Persona('Carlos','Ojeda', 1.75);
carlos.saludar();

var erika = new Desarrollador('Erika', 'Ramírez', 1.65);
erika.saludar();