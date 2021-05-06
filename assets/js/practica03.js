/**Ejercicio 9
 * Día de la semana
 */
let dia = prompt("Ingresa día de la semana");

// if (dia == "lunes" || dia == "martes" ||dia== "miercoles" || dia == "jueves" || dia == "viernes") {
    
// } else {
    
// }

if (dia == null) {
    console.log("Por favor ingrese un dia de la semana");
} else {
    dia = dia.toLowerCase(); // toUpperCase() Mayusculas
    if (dia == "sabado" || dia =="domingo" ) {
        console.log("Es fín de semana");
    } else {
        if (dia == "lunes" || dia == "martes" ||dia== "miercoles" || dia == "jueves" || dia == "viernes") {
            console.log("Es un día entre semana");
        } else {
            console.log("Ingrese un día de la semana valido");
        }
        
    }
}