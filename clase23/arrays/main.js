const nombres = ["Juan"];

// Imprimir nombre
console.log(nombres[0]);

// Forma de agregar un elemento
nombres[1] = "Agustín";
console.log(nombres[1]);

// Devolver cantidad de elementos
console.log(nombres.length); // 2

// Arrays de distintos tipos de datos (no es lo usal);
const arr = ["Juan", 29, "Soltero", "Desarrolo Web", true, undefined];
console.log(arr[1]); 29;

// typeof es una palabra reservada en JS que me devuelve el tipo de dato analizado. typeof devuelve un string: "boolean", "number", "object"
console.log( typeof arr[1] ); // number

// Validación respecto de arrays
console.log(typeof arr); // object

// Otra forma de definir arrays
const apellidos = new Array("Juan");
apellidos[1] = "María";
console.log(apellidos);
console.log(typeof apellidos); // object


// Si typeof me devuelve que un array es de tipo objeto. ¿Cómo puedo hacer yo para evaluar si algo es o no es un array

// Array.isArray()
// Adentro del paréntesis el dato a evaluar
// Array.isArray(appellidos);

const isArray = Array.isArray(apellidos); // true || false
console.log(isArray);

console.log(Array.isArray(2)); // false