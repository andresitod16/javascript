// # 3. Sistema de Gestión de Inventario (E-commerce)

// Este ejercicio se enfoca en la transformación de datos y cálculos matemáticos aplicados a un catálogo.

// - Archivo `data.js`: Un arreglo de objetos productos con propiedades como nombre, precio, stock y categoria.

// - Archivo `logic.js`: Funciones para:

//     1. Calcular el precio con un impuesto aplicado (IVA).

//     2. Verificar si un producto necesita reposición (si el stock es menor a 5).

//     3. Filtrar productos por una categoría específica.

// - Archivo `app.js`: Importar los productos y las funciones para mostrar en consola un reporte detallado: `"El producto [Nombre] cuesta $[PrecioTotal] y [Requiere/No requiere] reposición"`.


let objetos = [
  { producto: "teclado", precio: 150000, stock: "6 stock", categoria: "perifericos" },
  { producto: "lapto", precio: 250000, stock: "2 stock", categoria: "laptos" },
  { producto: "sillas", precio: 950000, stock: "8 stock", categoria: "muebles" },
  { producto: "monitor", precio: 780000, stock: "3 stock", categoria: "electrodomestico" },
];

let iva = 0.19;

for (let i = 0; i < objetos.length; i++) {
  let producto = objetos[i].producto;
  let precio = objetos[i].precio;
  let impuestos = precio * iva;
  let precio_final = precio + impuestos;

  if(stock< 5)
    estado = "necesita reposicion";
else(
    estado = "no necesita reposicion"
)

  console.log(
    `Producto: ${producto}  Precio base: ${precio} IVA: ${impuestos} Precio final: ${precio_final}`
  );
}