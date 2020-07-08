// Fundamentos de JavaScript -- Modificacion de prototipos

// Declaracion del prototipo
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}

// Declaracion de metodos de clase, siempre deben colocarse 
// a continuacion de la declaracion del prototipo
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Variante de la funcion soyAlto donde this hace 
// referencia a window
Persona.prototype.soyAlto = () => { 
    debugger
    return this.altura >= 1.8;
}


// Creacion del obbjeto con el prototipo Persona
var carlos = new Persona('Carlos','Ojeda', 1.75);
var erika = new Persona('Erika', 'Ramírez', 1.86);
var arturo = new Persona('Arturo', 'Robles', 1.65);
5
erika.saludar(); // Aun funciona
console.log(erika.soyAlto()); // No funcionará