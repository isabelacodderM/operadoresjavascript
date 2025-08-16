let pass = prompt("ingrese su contraseña");
let numCaracters = pass.length;
console.log (numCaracters);
//alert(numCaracters);
if (numCaracters >= 8 && numCaracters <= 10) {
    alert("contraseña segura");
} else {
    alert("contraseña muy corta");
}   