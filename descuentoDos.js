let precio = parseInt(prompt("ingrese el valor total de su compra"));
desc1 = (precio - (precio * 0.1)) ; 
desc2 = (precio - (precio * 0.2));
if (precio > 100) {
    alert("usted debe pagar " + desc1);
} else if (precio > 200) {
    alert("usted debe pagar " + desc2);
} else {
    alert("usted debe pagar el precio original");
}