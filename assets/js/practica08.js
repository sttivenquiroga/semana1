// DOM - Document Object Model
let btnPrueba = document.getElementById("btnPrueba");
const mensajeAlerta = () => {
    console.log("Prueba");
};

// Onclick  se llaman en la parte final del código

// btnPrueba.onclick = function (){
//     mensajeAlerta();
// }

btnPrueba.onclick = () =>{
    mensajeAlerta();
}