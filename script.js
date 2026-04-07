//condicionales
//si el producto cuesta menos de 100 se suma un 10% por costo de envio y si es mayor de  200 un descuento del 25%
let precio = Number(prompt("ingrese el precio del producto "))

if (precio <= 100 ) 
    { precio= precio *1.10;
    
} else if(precio >= 200 )
    {precio= precio *0.75 

    }

console.log ("el total a pagar es de " , precio )









