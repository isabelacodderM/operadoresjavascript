let edad = parseInt(prompt("ingrese su edad"));
console.log(edad);
(edad < 16)? alert("no puede conducir"): (edad >= 16 && edad <= 17)? alert("puede conducir con permiso especial"): (edad > 18)? alert("puede conducir libremente"): alert("puede conducir");