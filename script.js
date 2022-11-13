let numeroUtente = Math.floor(Math.random() * 6) + 1;
let numeroComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById("utente").innerHTML = "Il numero estratto dal giocatore è: " + numeroUtente;
document.getElementById("computer").innerHTML = "Il numero estratto dal computer è: " + numeroComputer;

console.log("Il numero estratto dal giocatore è: " + numeroUtente);
console.log("Il numero estratto dal computer è: " + numeroComputer);

if (numeroUtente > numeroComputer) {
    console.log("Bravo, hai vinto!");
    document.getElementById("risultato").innerHTML = "Bravo, hai vinto!";
} else if (numeroUtente < numeroComputer) {
    console.log("Peccato, sarà la prossima volta.");
    document.getElementById("risultato").innerHTML = "Peccato, sarà la prossima volta.";
} else {
    console.log("Pareggio!");
    document.getElementById("risultato").innerHTML = "Pareggio!";
}