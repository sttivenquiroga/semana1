// Ciclo for
let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () =>{
    for (let i = 0; i < 5; i++) {
        window.open("https://cookpad.com/co");
        
    }
};

// Event Listener
btnPrueba.addEventListener("click", () => {
    spamLink();
});
