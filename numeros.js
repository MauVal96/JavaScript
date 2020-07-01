//Numeros en JS

var edad = 23;
console.log("Valor de edad: " +edad);

// edad = edad + 1
edad++;
console.log("Valor de edad++: " +edad);

var peso = 75;
console.log("Valor de peso: " + peso);

// peso = peso - 2
peso -= 2;
console.log("Valor de peso -= 2: " + peso);

var sandwich = 1;
console.log("Valor de sandwich:" + sandwich);

// peso = peso + sandwich
peso += sandwich;
console.log("Valor de peso +=sandwich: " + peso);

var jugarAlFutbol = 3;
console.log("Valor de jugarAlFutbol: " + jugarAlFutbol);

// peso = peso - jugarAlFutbol
peso -= jugarAlFutbol;
console.log("Valor de peso -= jugarAlFutbol: " + peso);

var precioDeVino = 200.3;
console.log("Precio del vino: " + precioDeVino);

// Manejo de decimales 
var total = precioDeVino * 3;
console.log("Total de precioDeVino * 3: " + total);

var totalMasPreciso = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2);
console.log("Total precioDeVino mejorado: " + totalStr);

// Conversion de tipo 
var totalFloat = parseFloat(totalStr);

var rebanadas = 8;
var personas = 2;
var cantidadPorPersona = rebanadas / personas;
console.log(cantidadPorPersona);

