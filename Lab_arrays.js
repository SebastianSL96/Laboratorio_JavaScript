const prompt = require("prompt-sync")();
// Ejercicio 1. 
// Una app para calcular propinas de restaurante 

function CalcularPropina (total, porcentaje) { 
    let propina = total * (porcentaje/100);
    let monto_final = total + propina;
    return monto_final
}

let total_cuenta = prompt (" Ingrese el total de la cuenta ");
let porcentaje_propina = (" Ingrese el porcentaje que quiere dejar de propina ");

total_cuenta = number(total_cuenta);
porcentaje_propina = number(porcentaje_propina);

let monto_final = CalcularPropina(total_cuenta,porcentaje_propina);

console.log("El monto final a pagar es:  $", monto_final );


// Ejercicio 2 
// Validar contraseña 

let contraseña = Sebastian1234;

function ValidarContraseña (contraseña) {
    if (contraseña.length < 8) {
        return false;
    } else { 
        return true;
    }
};
    let numero = /\d/.test(contraseña);

    let mayuscula = /[A-Z]/.test(contraseña);

    if (numero && mayuscula) {
        return true;
    } else { 
        return false;
    };

if (ValidarContraseña(contraseña)) {
    console.log ("Contraseña valida");  
} else {
    console.log ( "Contraseña invalida");
}

// Ejercicio 3 
// Buscar productos en inventario 

let inventario = [
    {nombre: "Camisa", precio: 20},
    {nombre: "Pantalon", precio: 30},
    {nombre: "Blazer", precio: 60},
    {nombre: "Chaqueta", precio: 50},
    {nombre: "Pantaloneta", precio: 14},
    {nombre: "Bufanda", precio: 7}
];

function buscarInventario (nombre, inventario) {
    for (let i = 0; i < inventario.length; i++ ) {
        if (inventario [i].nombre === nombre);
        return inventario[i];
    }
}

let resultado = buscarInventario ("Camisa", inventario);
if (resultado !== null) {
    console.log ("Producto encontrado:", resultado);   
} else {
    console.log (" Producto no encontrado ");
}

// Ejercicio 4 
// Calcular promedio de notas

let notas = prompt (" Digite sus notas separadas por comas ( 1 - 10), separadas por coma (ej: 7,8,6,10");
let notasArray = Input.split(",").map(number); 

function calcularPromedio (notas) {
    let suma = 0;
    for (let i = 0; i< notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma/notas.length; 
    return promedio;
}

let promedioFinal = calcularPromedio(notasArray);
console.log ("El promedio de las notas es: ", promedioFinal)

// Ejercicio 5 
// Filtrar usuarios por edad 



//Ejercicio 6 
// Contador de palabras 


//Ejercicio 7
//Contador de palabras 


//Ejercicio 8
//Cambio de moneda 
