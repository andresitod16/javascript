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


// let numeros = [ 2, 5, 7, 12, 0, 17, 22 ];
// let pares = []
// let impares = []

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 == 0) {
//         pares.push(numeros[i]);

//     } else {
//         impares.push(numeros[i]);
//     }
// }
// console.log(pares);
// console.log(impares);

//let numeros = [1, 6, 23, 9, 5, 9];
//let suma = 0;

//for (i = 0; i < numeros.length; i++) {
 //   suma += numeros[i];
//}

//console.log(suma);


//let numeros = [1, 6, 23, 9, 5, 9];
//let max = 0

//for (i = 0; i < numeros.length; i++) {
   // if (numeros[i] > max) {
       // max = numeros[i];
//console.log(max);

// contador ; condicion ; incremento

//const palabras = ["javascript", "backend", "frontend", "html", "css", "java", "python"];
//for (let i = 0; i < palabras.length; i++) {
    //console.log(palabras[i] + " tiene " + palabras[i].length + " letras");
//}

//const palabras = ["javascript", "backend", "frontend", "html", "css", "java", "python"];

//let masCorta = palabras[0];

//for (let i = 1; i < palabras.length; i++) {
  //  if (palabras[i].length < masCorta.length) {
    //    masCorta = palabras[i];
    //}
//}

// console.log("La palabra más corta es: " + masCorta);

//const palabras = ["javascript", "backend",  "frontend", "html", "css", "java", "python"];

//let invertido = [];
//for (let i = palabras.length - 1; i >= 0; i--) {
  //  invertido.push(palabras[i]);

//console.log(invertido); 
//}

const estudiantes = [ 
  { nombre: "juan", apellido: "perez", notafinal: 4.5 },
  { nombre: "ana", apellido: "lopez", notafinal: 2.8 },
  { nombre: "carlos", apellido: "ruiz", notafinal: 3.2 },
  { nombre: "maria", apellido: "gomez", notafinal: 4.0 },
  { nombre: "luis", apellido: "martinez", notafinal: 2.5 },
  { nombre: "sofia", apellido: "hernandez", notafinal: 3.8 },
  { nombre: "diego", apellido: "torres", notafinal: 1.9 },
  { nombre: "valentina", apellido: "castro", notafinal: 4.7 },
  { nombre: "andres", apellido: "rojas", notafinal: 3.0 },
  { nombre: "camila", apellido: "vargas", notafinal: 2.9 }
];

for (let i = 0; i < estudiantes.length; i++) {

    let nombre = estudiantes[i].nombre;
    let apellido = estudiantes[i].apellido;
    let nota = estudiantes[i].notafinal;

    if (nota >= 3.0) {
        console.log(`El estudiante ${nombre} ${apellido} pasa con nota ${nota}`);
    } else {
        console.log(`El estudiante ${nombre} ${apellido} pierde con nota ${nota}`);
    }

}