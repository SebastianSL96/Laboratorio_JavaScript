//! Arrays

let frutas = ["manzanas", "Peras", "uvas"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

console.log(frutas.length);

// Añadir un elemento 
frutas.push("Sandia")
console.log(frutas)

// Eliminar un elemento 
frutas.pop(); // Elimina el ultimo elemento 
console,log ();

// Buscar elementos 
console.log(frutas.includes("Sandia"));

frutas[2] = "Mango"; 

console.log(frutas);

//! Objetos 
const persona = { 
    nombre: "Ana", 
    Edad: 80, 
    Profesion: "Desarrolladora",
    Gustos: [ "Carros", "Lectura"]
};

console.log(persona.nombre);
console.log(persona.Edad);

persona.Edad = 85;

persona.Gustos.push("Cocina");

console.log(persona);

persona.pais = "Colombia"; 

delete persona.pais;

console.log(Object.keys(persona));

//Funciones 
function saludar () { 
    console.log("Hola")
};
saludar

function resta (a, b){ 
    return a - b
};

let resul = resta(5,2);
console.log (resul);

const s = `My name is ${n} and I am ${age} years old.`; // Para darle formato a la salida

function MayorDeEdad(edad) {
  return edad >= 18;
}
if (MayorDeEdad(20)) {
  console.log("Puede entrar");
} else {
  console.log("Acceso denegado");
};

let PuedeConducir = MayorDeEdad(10);
console.log ("¿ Puede conducir? ", PuedeConducir)


