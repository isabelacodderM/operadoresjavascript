let pass = prompt("ingrese su contraseña");
let numCaracters = pass.length;
console.log (numCaracters);
//alert(numCaracters);

(numCaracters >= 8)? alert("contraseña segura"): alert("contraseña muy corta");