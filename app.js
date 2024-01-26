let numeroSecreto = 0;
let intentos = 0;
listaNumerosSorteados = [];
numeroMaximo = 10;

/*LLamamos la funcion signarTextoElemento
asignarTextoElemento('h1',"Juego Adivina El Numero SECRETO");
asignarTextoElemento('p',"Ingresa un número del 1 al 100");
*/


//creamor la funcion signarTextoElemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);//Guardamos el h1 del HTML en una variable(Esun Objeto)
    elementoHTML.innerHTML = texto;
    return;
}

//2. Utilizar acciones. Creando en una funcion y llevandola a HTML
function verificarIntento(){
    intentos ++;
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades, Acertaste el Número secreto ${numeroSecreto}, en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        intentos= 0;
        //document.getElementById('intentar').addAttribute('disabled');
    } else{

        if (intentos == 3){
            asignarTextoElemento('p',`Te quedaste sin intentos el numero secreto era: ${numeroSecreto}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intentar').setAttribute('disabled', 'true');
            intentos = 0;
            limpiarCaja()

        } else{
        
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p',`El numero secreto es Menor, intento ${intentos}, te quedan ${3-intentos}`);
            }else{
                asignarTextoElemento('p',`El numero secreto es Mayor, intento ${intentos}, te quedan ${3-intentos}`);
            }
            
            limpiarCaja()
        }
    }

    return;
}

//Funcion numero secreto generado aletoriamente
function generaNumeroSecreto(numeroMaximo){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)

    //Si ya sorteamos todo los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`Ya se Sortearon todos los numeros secretos, maximo: ${numeroMaximo}, presiona F5`);
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    } else{
        
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto(numeroMaximo);//vuelve a llamarse y retorna el valor del numero secreto
    }else{
        listaNumerosSorteados.push(numeroGenerado); 
    }
    return numeroGenerado;

    }

    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}

function reiniciarJuego(){
    //Limpiar la Caja
    limpiarCaja();

    /*
    Indicar mendaje de intervalo de números
    Generar el numero aleatorio
    iniciar el numero de intentos
    */
   condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled')
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego Adivina El Numero SECRETO");
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto(numeroMaximo);
}

condicionesIniciales()

console.log(numeroSecreto);


