// Minicalculadora
const miniCalculadora = () =>{
// creamos opción de manú
let op = prompt("Ingrese la opción correspondiente a la operación: \n A = Suma \n B = Resta \n C = Multiplica \n D = Divide").toLowerCase();
//O se puede así convertir  op = op.toLowerCase();
if (op != "a" && op !="b" && op !="c" && op !="d" || op == null) {
    alert("1: Debe ser una opción entre A y D");
} else {
    let num1 = parseFloat(prompt("Ingrese el número 1"));
    let num2 = parseFloat(prompt("Ingresa el número 2"));
    let resultado = 0;
    if (op == "a") resultado = num1 + num2;
    if (op == "b") resultado = num1 - num2;
    if (op == "c") resultado = num1 * num2;
    if (op == "a") {
        if (num2 === "0") {
            alert("No se puede dividir un número entre 0");
        } else {
            resultado = num1 + num2;
        }
    }
    alert("El resultado es: "+ resultado);
}

};