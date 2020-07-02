// Fundamentos de JavaScript -- Switch
var signo = prompt('Cual es tu signo zodiacal?');

console.log(signo + ':');

// Condicional multiple para elegir el horoscopo del dia 02/07/2020

switch(signo) {
    case 'aries':
    case 'Aries':
        console.log('Hoy deberás tener en cuenta que lo más importante es que necesitas conjugar la armonía, no solamente en ti, sino también a tú alrededor, entre los seres que más te importan. Ya que necesitas prestar atención a uno de ellos, en especial; que lleva tiempo como fuera de juego y que precisa consejo y guía. Así que “Manos a la obra”.');
        break;
    case 'tauro':
    case 'Tauro':
        console.log('Hoy notarás que es un día en el cual será un tiempo especial y grandioso para sentirte feliz, y a la vez para crear a tu antojo, y de una forma magistral el mundo que deseas y que has imaginado desde hace mucho tiempo. También podrías preparar una velada romántica y especial para alguien que te importa mucho. Verás como cuando das cariño, recibes más.');
        break;
    case 'geminis':
    case 'Geminis':
        console.log(' Hoy es una jornada en la que destacarás en todo lo que realices. Pero en la cual deberás pactar un acuerdo entre tus ocupaciones y tu vida familiar. Porque es bueno que haya equilibrio y que ambos ambiente se conjunten. Sera grandioso sentirte con la satisfacción del deber cumplido y de ver también como están felices tus seres queridos.');
        break;
    case 'cancer':
    case 'Cancer':
        console.log('Hoy estás ante un día en el cual tu conexión contigo será muy profunda y a la vez te ayudará, porque podrás acceder a un mundo maravillosos lleno de claves para tu vida; que te ayudarán no solamente a ti, sino también a sentirte con más unión a los demás; ya que te darás cuenta de que formáis parte de lo mismo. Será una jornada muy especial.');
        break;
    case 'leo':
    case 'Leo':
        console.log('Es un momento en el que necesitas utilizar todas tus capacidades y tus genialidades en ciertos asuntos monetarios y empresariales que te están esperando hace tiempo. Es momento de resolverlo todo con fluidez. Lograrás conectar de forma fácil, y ver cuál es la solución. Esto te hará sentir muy feliz. Y así la vida te parecerá mañana, diferente.');
        break;
    case 'virgo':
    case 'Virgo':
        console.log('Hoy tendrás una buena jornada para pensar tranquilamente en cuáles son tus verdaderos deseos de tu subconsciente y de tu vida. Tal vez obtengas claves en sueños. O con conversaciones intrascendentes con personas de tu entorno. Es importante que lo pongas en práctica; ya que necesitas cambiar de aires y de actitudes en todo.');
        break;
    case 'libra':
    case 'Libra':
        console.log('Hoy notarás que es un día importante para que prestes atención a tus temas atrasados; ya que te has dado cuenta que son de mucha relevancia. Y además podrás plantearlos de una manera tranquila, como quien se toma un café en un lugar tranquilo y lleno de árboles. Todo lograrás sortearlo fácilmente. Será un día especial y necesario.');
        break;
    case 'escorpio':
    case 'Escorpio':
        console.log(' Es un día muy importante ya que tus proyectos hoy te saldrán “A pedir de boca”, porque cuentas con una benéfica disposición de los astros. Y además tú forma de adaptarte a los nuevos cambios, ya la habías previsto con bastante antelación y por eso no te pilla de sorpresa. Disfruta de este momento especial. Y mira la vida con otros ojos más optimistas.');
        break;
    case 'sagitario':
    case 'Sagitario':
        console.log('Es un momento en el que notarás que tu trabajo y tus ocupaciones podrán ir sucediendo de una manera gradual y mucho más fácil que otros días. Estás en un tiempo crucial de tu vida, y te sientes con la fascinación de poder descubrir que tienes nuevas visiones de tu entorno y del mundo que habías pasado por alto, y que te encantan.');
        break;
    case 'capricornio':
    case 'Capricornio':
        console.log('Hoy te darás cuenta de que es el momento de poner en marcha todas esas ideas de antaño; y todos los conocimientos y la experiencia aprendida que posees, para poder realizar algo que siempre habías planeado en tu vida. Ahora por fin ha llegado el momento de hacerlo. Disfruta y sé feliz. Y no olvides compartirlo con los tuyos.');
        break;
    case 'acuario':
    case 'Acuario':
        console.log('Hoy es un tiempo en el que tu ductilidad y genialidad saldrán a la luz a borbotones. Todas tus capacidades confluyen para dar una salida a tus creaciones y a tu talento de una manera espectacular. Y no solamente te sorprenderás tú, sino que también se reflejará en lo que sienten y viven los demás, que están a tu lado siempre.');
        break;
    case 'piscis':
    case 'Piscis':
        console.log('Hoy es un día especial ya que podrás llevar a cabo ciertos planes increíbles con más personas cercanas con las que tienes mucha afinidad. Tu pareja, si quieres, también te ayudará, y todo confluirá de una forma prodigiosa y muy profunda; ya que sus bases son fuertes y muy creativas. Todo será como un gran puzle que se va colocando mágicamente.');
        break;
    default:
        console.log('Respuesta no valida');
}