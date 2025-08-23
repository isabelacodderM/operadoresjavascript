let peso = parseInt(prompt("ingrese su peso"));
var estatura = parseFloat(prompt("ingrese su estatura"));
IMC = peso / (estatura * estatura);
(IMC < 18.5)? alert("bajo de peso"): (IMC >= 18.5 && IMC < 25)? alert("normal"): (IMC >= 25 && IMC < 30)? alert("sobrepeso"): (IMC > 30)? alert("obesidad"): alert("digite un numero");