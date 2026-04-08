//let options = ["piedra", "papel", "tijera"];
//let azar = Math.floor(Math.random() * 3);
//let computer = options[azar];

//let jugador = prompt("Selecciona: piedra, papel o tijera");

//if (jugador == computer) {
    //console.log("Empate");
//} else if (jugador == "piedra") {
    //if (computer == "tijera") {
     //   console.log("Ganaste");
   // } else {
   //     console.log("Perdiste");
  //  }
//} else if (jugador == "papel") {
   // if (computer == "piedra") {
 //       console.log("Ganaste");
 //   } else {
   //     console.log("Perdiste");
   // }
//} else if (jugador == "tijera") {
  //    console.log("Ganaste");
    //} else {
     //   console.log("Perdiste");
  //  }
//} else {
  //  console.log("Opción inválida");
//}

//console.log("Computadora eligió: " + computer);


let numeros = [ 2, 5, 7, 12, 0, 17, 22 ];
let pares = []
let impares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
        
    } else {
        impares.push(numeros[i]);
    }
}
console.log(pares);
console.log(impares);

