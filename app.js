
/*let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 100;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    //La funcion getElementById nos permite acceder al id que definimos en el HTML
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        //Este approach se encarga de habilitar el boton de nuevo juego de la pagina
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
    }   intentos++;
    limpiarCaja(); // esta funcion se encarga de limpiar la caja cuando no acierte el numero
    return;
}

//Esta funcion se encarga de limpiar la caja
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+ 1;

    console.log(numeroGenerado);
    console.log(listaNumeros);

    // En caso de que se hayan sorteado todos los numeros
    if (listaNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
        // Si el numero generado esta en la lista
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //inicializar el numero de intentos   
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    // Se deshabilito el boton de reiniciar juego con el objetivo de que
    // solo se utilice cuando haya adivinado el numero
}


condicionesIniciales(); 
*/

//1- función que genere numero secreto aleatorio y guardarlo en una 
// variable

let maxNumber = 10;
let secretNumber = generateSecretNumber();
let tries = 1;

function generateSecretNumber() {
    let numberGenerated = parseInt(Math.random()* maxNumber) + 1;
    console.log(numberGenerated);
}

secretNumber;

// 2- función que asigne texto en el titulo o párrafo de la pagina web
function textElement(elementHTML, text) {
    let elementHT = document.querySelector(elementHTML);
    elementHT.innerHTML = text;
}

textElement('h1', 'Juego numero secreto');
textElement('p', 'Insert a number between 1 to 10');

//3-funcion que se encargue de verificar intento de adivinar 
// el numero secreto

function verificarIntento() {
    let userNumber = parseInt(document.getElementById('valorUsuario').value);

    //Verificar numero
    if (userNumber === secretNumber) {
        textElement('p', `Congrats you have guest the secret number in ${tries} ${(tries === 1) ? 'try': 'tries'}`);
        
    } else {
        if (userNumber > secretNumber) {
            textElement('p', 'The secret number is lower');
        } else {
            textElement('p', 'The secret number is higher');
        }
    }   tries ++;
}




//verificarIntento()