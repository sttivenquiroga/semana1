let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");

const registraNombre = () =>{
    let nombre = prompt("Ingresa tú nombre");
    this.nombre.innerHTML = "Nombre: "+ nombre;
};

// Onclick
btnPrueba.onclick = () => {
    registraNombre();
};