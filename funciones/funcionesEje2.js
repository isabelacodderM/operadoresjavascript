function resta (num1, num2)
{
    let resultado = num1 - num2;
    alert ("el resultado de la resta es " +resultado);
}
function suma (num1, num2){
    let resultado = num1 + num2;
    alert ("el resultado de la suma es " +resultado);
}
function mult (num1, num2){
    let resultado = num1 * num2;
    alert ("el resultado de la multiplicacion es " + resultado);
}
function divicion (num1, num2){
    let resultado = num1 / num2;
    alert ("el resultado de la division es " + resultado);
}
function residuo (num1, num2){
    let resultado = num1 % num2;
    alert ("el residuo es " + resultado);
}

let n1 = prompt ("Ingrese el primer numero");
n1 = parseInt(n1);
let n2 = prompt ("Ingrese el segundo numero");
n2 = parseInt(n2);
resta (n1, n2);
suma (n1, n2);
mult (n1, n2);
divicion (n1, n2);
residuo (n1, n2);
