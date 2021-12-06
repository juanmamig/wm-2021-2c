/*
JavaScript - Intro
Clase 20
*/

let edad = 31; // Defino una variable edad
let resultado = edad + 2; // Defino una variable resultado
console.log(resultado); // Muestro en consola el resutlado

let nombre = prompt("Ingrese su nombre");
console.log(nombre);


// Cuando ingresamos un valor mediante un prompt, ese valor se convierte en un string
let edad2 = parseInt(prompt("Ingrese su edad"), 10);
console.log("Tu edad en 5 años va a ser: " + (edad2 + 5)); // 34


let edad3 = prompt("Ingrese su edad");
let parsedEdad = parseInt(edad3, 10) + 5;
console.log(" Tu edad en 5 años va a ser: " + parsedEdad);