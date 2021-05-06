/**
 * Condicional if / else
 * 
 */
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tú edad");

if (edad >= 18) {
    console.log("Puedes ver peliculas violentas");
} else {
    console.log("No puedes ver estas peliculas");
}

/**
 * Condicional Switch
 */

switch (edad) {
    case "18":
        console.log("Puedes ver peliculas violentas");
        break;

    default:
        console.log("No puedes ver estas peliculas");
        break;
}