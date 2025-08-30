function numeros(){
let numeros = [1,2,3,4]; //creando arreglo 
console.log(numeros [2]); //n: 3 //mostrar. hago el cambio, muestro.
console.log(numeros [0]); //n:1 //mostrar
console.log(numeros); //[ 1, 2, 3, 4 ] //mostrar arreglo
numeros[2] = 7; //cambia la posicion 2 del arreglo
console.log(numeros); //[ 1, 2, 7, 4 ] //muestra el arreglo y la nueva posicion 2
numeros[4]=22;
console.log(numeros); //[ 1, 2, 7, 4, 22 ]
numeros.push(33);
console.log(numeros); //[ 1, 2, 7, 4, 22, 33 ]

}
numeros();