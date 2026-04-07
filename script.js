let options = [" piedra ", " papel ", "tijera" ];
let azar = Math.floor( Math.random ( )*3 );
let computer = options [azar]

let jugador =  prompt ("seleciona piedra , papel , tira ")
if (usuario == computer) {
    console.log("empate");
} else 