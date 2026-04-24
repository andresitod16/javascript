// // nombres = [
// //  {nombres: "andres ", apellidos: "rodriguez", edad: 19, altura: 171, peso: 67}
// // ],
// //  {nombres: "david", apellidos : "carvjal", edad: 19, altura: 171, peso: 67},
// //   {nombres: "santiago", apellidos : "cumbe", edad: 18, altura: 179, peso: 70} ;
 
//   for (let i = 0; i< nombres.length; i++) {
//     console.log (nombres[i].nombres );
// }

// definir una funcion de masa corporal
// let nombres = [
//   {nombres: "andres", apellidos: "rodriguez", edad: 19, altura: 171, peso: 67},
//   {nombres: "david", apellidos: "carvajal", edad: 19, altura: 180, peso: 97},
//   {nombres: "santiago", apellidos: "cumbe", edad: 18, altura: 179, peso: 60}
// ];

// function calcularimc(peso, altura) {
//   let alturaMetros = altura / 100;
//   return peso / (alturaMetros ** 2);
// }
// for (let i = 0; i < nombres.length; i++) {
//   let persona = nombres[i];
//   let imc = calcularimc(persona.peso, persona.altura);

//   let condicion = "";

//   if (imc < 18.5) {
//     condicion = "peso inferior al normal";
//   } else if (imc >= 18.5 && imc <= 24.9) {
//     condicion = "peso normal";
//   } else if (imc >= 25 && imc < 30) {
//     condicion = "peso superior del normal";
//   } else if (imc >= 30) {
//     condicion = "sobrepeso";
//   }

//   console.log(persona.nombres + " " + persona.apellidos + ": " + condicion);
// }

  //condiciones menos  de 18.5 imprimir pesos inferior normal
  // peso normal de 18.5 -24.9
  // peso superior del normal 25.0-29.9
  // sobrepeso  30.0