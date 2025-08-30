function notas() {
let notas = [];
    for (let i = 0; i < 5; i = i + 1) {
    let note = parseFloat (prompt ("ingrese la nota " + i));
        notas.push (note);
    
    }
    alert ("las notas son: " +notas);
}
notas ();
