let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese otro numero"));
let num3 = parseInt(prompt("ingrese otro numero"));
(num1 > num2 && num1 > num3)? alert("el numero " + num1 + "es mayor que el numero " + num2 + "y el numero " + num3):
(num2 > num1 && num2 > num3)? alert("el numero " + num2 + "es mayor que el numero " + num1 + "y el numero " + num3):
(num3 > num1 && num3 > num2)? alert("el numero " + num3 + "es mayor que el numero " + num1 + "y el numero " + num2):
alert("los tres numeros son iguales");
