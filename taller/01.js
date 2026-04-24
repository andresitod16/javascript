// # 1. Analizador de Calificaciones Académicas

// Este ejercicio introduce lógica de agregación (promedios) y strings dinámicos.

// - Archivo `students.js`: Un arreglo de estudiantes, donde cada uno tiene un nombre y un arreglo de notas numéricas.

// - Archivo `grades.js`: Funciones para:

//    1. `calcularPromedio(notas)`: Recibe el array de notas y retorna el promedio.

//    2. `obtenerEstado(promedio)`: Retorna "Aprobado" si es ≥ 3.0, "Reprobado" si es menor.

//    3. `encontrarMejorEstudiante(estudiantes)`: (Opcional) Para retar a los más avanzados.

// - Archivo `index.js`: Orquestar la lógica para imprimir: `"Estudiante: [Nombre] | Promedio: [Valor] | Estado: [Aprobado/Reprobado]"`.

let nombres = [{nombre : "andres", notas : [5, 4, 3, 1, 4]},
{nombre : "david", notas : [3, 4, 4, 2, 4]},
{nombre : "camila", notas : [2, 1, 3, 4, 5]},
{nombre : "santiago", notas : [5, 4, 4, 5, 5]},
{nombre : "ana", notas : [4, 2, 3, 1, 1]} ];

function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  return suma / notas.length;
}

for (let i = 0; i < nombres.length; i++) {
  let persona = nombres[i];
  let promedio = calcularPromedio(persona.notas);
  if (promedio < 3 )
    estado = "reprobado"
else {
    estado = "aprobado"
}
  console.log(persona.nombre + ": " + promedio + " - " + estado);
}

