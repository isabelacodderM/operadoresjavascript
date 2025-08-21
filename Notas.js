let nota1 = parseInt(prompt("ingrese su primer nota"));
let nota2 = parseInt(prompt("ingrese su segunda nota"));
let nota3 = parseInt(prompt("ingrese su tercera nota"));
let promedio = (nota1 + nota2 + nota3) / 3;
(promedio>=3.0)? alert("aprobado"): (promedio>2.0 && promedio <2.9 )? alert("recuperacion"): (promedio<2.0)? alert("reprobado"): alert("nota invalida");