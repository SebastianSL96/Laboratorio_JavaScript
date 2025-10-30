// Sebastian Leiva 
// 1. Declarar variables y tipos de datos 

// Ejercicio 1. 
let nombre = "Sebastian";
let edad = 29;
let estudiante = true;

// Ejercicio 2.

let number;
let n = null;

console.log (number);
console.log (n);

// 2. Ingreso de datos por teclado 
// Ejercicio 1.  
birth = prompt ("Digite su año de nacimiento");

edad = 2025 - birth;
console.log (edad);

// Ejercicio 2. 

num1 = prompt ("Ingrese un numero ");
num2 = prompt (" Ingrese otro numero ");

let num1Float = parseFloat(num1);
let num2Float = parseFloat(num2);

sum = num1Float + num2Float;
console.log (sum);

// 3. Condicional if.
// Ejercicio 1.

euser =  prompt (" Ingrese su edad ")
if (euser >= 18 ){ 
    console.log ("Puedes entrar")
} else { 
    console.log ("No puedes entrar")
};

// Ejercicio 2. 

usernum = prompt (" Digita cualquier numero real ");

usernumFloat = parseFloat(usernum);
if (usernumFloat > 0 ) {
    console.log (" Su numero es positivo ")
} if (usernumFloat = 0 ) {
    console.log (" Su numero es cero ")
} if (usernumFloat < 0 ) {
    console.log (" Su numero es negativo ")
} else {
    console.log (" Error ")
};

// 4. Bucle while 
// Ejercicio 1.

numbcl = prompt (" Ingresa un numero ");
numbcl = number(numbcl);

let contador = 1;

while ( contador <= numbcl) { 
    console.log(contador); contador ++; 
};

// Ejercicio 2. 

let password = 12345; 
password1 = prompt (" Ingrese su contraseña ");

if (password1 == password) {
    console.log (" Contraseña correcta ")
} else {
    while (password1 == password ) { 
    console.log (" Contraseña incorrecta ")} 
}

// 5. Bucle for 
// Ejercicio 1. 

for(let i = 1; i <= 10; i++) {
    console.log(i);
};

// Ejercicio 2. 

let numfor = prompt (" Digita un numero para ver su tabla de multiplicar");
numfor1 = number(numfor);

if (numfor1 > 10) { 
    console.log (" Ingrese un numero del 1 al 10 ")
} else { 
    for ( let i = 1; i <= 10; i++) {
        console.log ( numfor1 + "x" + i + "=" + (numfor1 * i ))
    }
};

