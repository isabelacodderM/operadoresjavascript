//escribe un prgrama que muestre por consola o alerta los numeros de 1 al 100, sustituyalos segun los siguientes puntos 
//1. los multiplos de 3 por la palabra fizz
//2. los multiplos 5 por la palabra buzz
//3. los multiplos de 3 y 5 por la palabra fizzbuzz
function fizzbuzz (numero){
 if (numero > 1){                          //if (numero > 1 && numero <100)
    if (numero < 100){
     (numero % 5 === 0)
     alert ('buzz')
    }
    if (numero % 3 === 0){
        alert ('fizz')
    }
    if (numero % 5 === 0 && numero % 3 === 0)
        alert ('fizzbuzz')
 }
}
let numero = parseInt (prompt("ingrese un numero de 1 a 100"));
fizzbuzz (numero);