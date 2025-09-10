
// Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5


// Funcion que se encarga de mostrar el titulo y el parrafo de la pagina
function asignarTextoElemento(elementoHTML, texto) {
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = texto;
    return;
}

// Funcion que genera un numero secreto que no se haya sorteado antes
function generarNumeroSecreto() {
    // en esta variable se guarda el numero generado aleatoriamente
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
        return null;

    } else {
        //Si el numero esta en la lista, genera otro
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            // si no esta en la lista, lo agrega a la lista y devuelve el numero generado
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

// Esta funcion se encarga de limpiar la caja
function limpiarCaja() {
    let limpiar = document.getElementById('valorUsuario');
    limpiar.value = '';
}

// Funcion que verifica si el numero ingresado coincide con el secreto
function verificarIntento() {
    // Permitir que el usuario ingrese un numero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // Validar si el numero es menor que cero o mayor que el numero maximo
    if (numeroDeUsuario <= 0 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p','Favor ingresar un numero dentro del rango');
        limpiarCaja();
    } else {
        // Verificar si el numero coincide con el numero secreto
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste con el numero secreto. Lo hiciste en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
            
            // Este approach se asegura que una vez el numero sea adivinado,
            // se habilite el boton para reiniciar el juego
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        } else {
            // Si el numero de usuario es mayor que el secreto
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p','El numero secreto es menor');

            } else {
                // si el numero de usuario es menor, se le deja saber
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            // Esta funcion se encarga de limpiar la caja
            limpiarCaja();
        }
       
    }

}

// Esta funcion presentara las condiciones iniciales del juego
function condicionesIniciales() {
    // Presentar mensajes de bienvenida
    asignarTextoElemento('h1','Adivina el numero secreto');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo}`)
    // Generar un nuevo numero secreto
    numeroSecreto = generarNumeroSecreto();
    // Reiniciar los intentos
    intentos = 1;
}

// Esta funcion reinicia el juego cuando el usuario haya acertado
function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Presentar mensajes de bienvenida
    // Generar un nuevo numero secreto
    // Reiniciar los intentos
    condicionesIniciales();
    // Deshabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
