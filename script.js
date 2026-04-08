let options = ["piedra", "papel", "tijera"];
let azar = Math.floor(Math.random() * 3);
let computer = options[azar];

let jugador = prompt("Selecciona: piedra, papel o tijera");

if (jugador == computer) {
    console.log("Empate");
} else if (jugador == "piedra") {
    if (computer == "tijera") {
        console.log("Ganaste");
    } else {
        console.log("Perdiste");
    }
} else if (jugador == "papel") {
    if (computer == "piedra") {
        console.log("Ganaste");
    } else {
        console.log("Perdiste");
    }
} else if (jugador == "tijera") {
    if (computer == "papel") {
        console.log("Ganaste");
    } else {
        console.log("Perdiste");
    }
} else {
    console.log("Opción inválida");
}

console.log("Computadora eligió: " + computer);