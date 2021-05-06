// Suma
const sumaDosNumeros = () =>{
    let num1 = parseInt(prompt("Ingresa el número 1"));
    let num2 = parseInt(prompt("Ingresa el número 2"));
    console.log(num1+num2);
    let resultado = (num1) + (num2);
    console.log(resultado);
};
// Resta
const restaDosNumeros = () =>{
    let num1 = parseInt(prompt("Ingresa el número 1"));
    let num2 = parseInt(prompt("Ingresa el número 2"));
    console.log(num1-num2);
    let resultado = (num1) - (num2);
    console.log(resultado);
};
// MUltiplicación
const multiplicacionDosNumeros = () =>{
    let num1 = parseInt(prompt("Ingresa el número 1"));
    let num2 = parseInt(prompt("Ingresa el número 2"));
    console.log(num1*num2);
    let resultado = (num1) * (num2);
    console.log(resultado);
};
// División
const divisionDosNumeros = () =>{
    let num1 = parseInt(prompt("Ingresa el número 1"));
    let num2 = parseInt(prompt("Ingresa el número 2"));
    console.log(num1, num2);
    if (num2 == 0) {
        console.log("No se puede dividir por cero");
    } else {
        let resultado = num1 / num2;
        console.log(resultado);
    }
};