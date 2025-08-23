let num = parseInt(prompt("ingrese un numero de 1 a 7, el cual 1 es lunes y 7 domingo"));
console.log(num);
(num >= 1 && num <= 5)? alert ("es un dia laboral"): (num >= 6 && num <=7 )? alert ("es fin de semana"): alert ("numero invalido");