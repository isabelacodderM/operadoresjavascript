let pass = prompt("ingrese su contraseña");
let numCaracters = pass.length;
console.log (numCaracters);
//alert(numCaracters); (muestra el numero de caracteres) isabela = 7;
if (numCaracters >= 8) {
    alert("contraseña segura");
} else {
    alert("contraseña muy corta");
}   