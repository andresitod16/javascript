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

//const estudiantes = [ 
  //{ nombre: "juan", apellido: "perez", notafinal: 4.5 },
  //{ nombre: "ana", apellido: "lopez", notafinal: 2.8 },
  //{ nombre: "carlos", apellido: "ruiz", notafinal: 3.2 },
  //{ nombre: "maria", apellido: "gomez", notafinal: 4.0 },
  //{ nombre: "luis", apellido: "martinez", notafinal: 2.5 },
  //{ nombre: "sofia", apellido: "hernandez", notafinal: 3.8 },
  //{ nombre: "diego", apellido: "torres", notafinal: 1.9 },
  //{ nombre: "valentina", apellido: "castro", notafinal: 4.7 },
  //{ nombre: "andres", apellido: "rojas", notafinal: 3.0 },
  //{ nombre: "camila", apellido: "vargas", notafinal: 2.9 }
//];

//for (let i = 0; i < estudiantes.length; i++) { 
  //  let nombre = estudiantes[i].nombre;
    //let apellido = estudiantes[i].apellido;
    //let nota = estudiantes[i].notafinal;
    //if (nota >= 3.0) {
      //  console.log(`El estudiante ${nombre} ${apellido} pasa con nota ${nota}`);
    //} else {
    //    console.log(`El estudiante ${nombre} ${apellido} pierde con nota ${nota}`);
  //  }
//}


//let numero = Math.floor((Math.random() * 10) + 1);
//let intentos = 6;

//while (intentos > 0) {
 //   let jugador = prompt("aivina el numero de 1 a 10");

   // if (jugador == numero) {
       // console.log("ganaste");
        //break;
   // } else {
     //   if (intentos == 3) {
       //     intentos = 2;
       // } else if (intentos == 2) {
         //   intentos = 1;
        //} else if (intentos == 1) {
          //  intentos = 0;
        //}

        //console.log("Perdiste una vida");
    //}
//}

//if (intentos === 0) {
  //  console.log("perdiste el juego. El numero era: " + numero);
//}

//let año = prompt("Ingresa un año");

//if (año % 4 == 0) {
  //  if (año % 100 == 0) {
    //    if (año % 400 == 0) {
      //      console.log("Es año bisiesto");
        //} else {
          //  console.log("No es bisiesto");
        //}
        // } else {
        //console.log("Es año bisiesto");
    //}
//} else {
  //  console.log("No es bisiesto");
//}

//let mes = prompt("ingresa un mes 1-12");

//if (mes >= 3 && mes <= 5) {
  //  console.log("primavera");
//} else if (mes >= 6 && mes <= 8) {
//    console.log("verano");
//} else if (mes >= 9 && mes <= 11) {
 //   console.log("otoño");
//} else if (mes >= 1 && mes <= 2) {
  //  console.log("invierno");
//} else if (mes == 12) {
  //  console.log("invierno");
//} else {
 //   console.log("mes inválido");
//}

//let data = [2024, 2026, 3000, 2100];

//for (let i = 0; i < data.length; i++) {
  //  let año = data[i];

    //if (año % 400 === 0) {
      //  console.log(year + " es bisiesto");
    //} else if (año % 100 === 0) {
      //  console.log(añov + " no es bisiesto");
    //} else if (año % 4 === 0) {
      //  console.log(año + " es bisiesto");
    //} else {
      //  console.log(año + " no es bisiesto");
   // }
//}
//let btn1 = document.getElementById("btn1");
//
//btn1.addEventListener("click", () => {

  //  alert("boton 1");
//
    //let numero = Math.floor((Math.random() * 10) + 1);
  //  let intentos = 6;
//
   // while (intentos > 0) {
  //      let jugador = prompt("Adivina el número del 1 al 10");
//
        //if (jugador == numero) {
          //  alert("Ganaste");
         //   break;
        //} else {
       //     intentos--;
      //      alert("Te quedan: " + intentos);
    //    }
  //  }
//
    //if (intentos === 0) {
    //    alert("Perdiste. El número era: " + numero);
  //  }
//
//});

//let btn2 = document.getElementById("btn2");
//
//btn2.addEventListener("click", () => {
//
    //let options = ["piedra", "papel", "tijera"];
    //let azar = Math.floor(Math.random() * 3);
  //  let computer = options[azar];
//
    //let jugador = prompt("selecciona: piedra, papel o tijera");
    //if (jugador == computer) {
      //  alert("empate");
    //} else if (jugador == "piedra") {
        //if (computer == "tijera") {
          //  alert("ganaste");
          //   } else {
        //    alert("perdiste");
      //  }
    //} else if (jugador == "papel") {
        //if (computer == "piedra") {
         //   alert("ganaste");
        //} else {
        //    alert("perdiste");
      //  }
    //} else if (jugador == "tijera") {
        //if (computer == "papel") {
         //   alert("ganaste");
        //} else {
       //     alert("perdiste");
      //  }
    //} else {
    //    alert("opcion invalida");
  //  }
//
  //  alert("la computadora eligio: " + computer);
//
//});

//let btn3 = document.getElementById ("btn3");
//btn3. addEventListener("click ", () => {
 // /alert ("boton 3")
//})

const resident = [
  { nombre: "Leon S. Kennedy", imagen: "https://picsum.photos/200/300?random=1" },
  { nombre: "Claire Redfield", imagen: "https://picsum.photos/200/300?random=2" },
  { nombre: "Chris Redfield", imagen: "https://picsum.photos/200/300?random=3" },
  { nombre: "Jill Valentine", imagen: "https://picsum.photos/200/300?random=4" },
  { nombre: "Ada Wong", imagen: "https://picsum.photos/200/300?random=5" },
  { nombre: "Albert Wesker", imagen: "https://picsum.photos/200/300?random=6" },
  { nombre: "Ethan Winters", imagen: "https://picsum.photos/200/300?random=7" },
  { nombre: "Rebecca Chambers", imagen: "https://picsum.photos/200/300?random=8" },
  { nombre: "Carlos Oliveira", imagen: "https://picsum.photos/200/300?random=9" },
  { nombre: "Sheva Alomar", imagen: "https://picsum.photos/200/300?random=10" }
];

document.addEventListener("DOMContentLoaded", () => {

  let title = document.querySelector("h3");
  let contenedor = document.querySelector("section");

  title.textContent = "Personajes Resident Evil";

  for (let i = 0; i < resident.length; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = resident[i].imagen;

    let nombre = document.createElement("h2");
    nombre.textContent = resident[i].nombre;

    card.appendChild(img);
    card.appendChild(nombre);

    contenedor.appendChild(card);
  }

});