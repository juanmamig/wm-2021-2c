/* REPASO ARRAYS */

const nombres = ["Juan"];

// Imprimir nombre
console.log(nombres[0]);

// Forma de agregar un elemento
nombres[1] = "Agustín";
console.log(nombres[1]);

// Devolver cantidad de elementos
console.log(nombres.length); // 2


/* ARRAYS CON DISTITNO TIPOS DE DATOS */

// Arrays de distintos tipos de datos (no es lo usal);
const arr = ["Juan", 29, "Soltero", "Desarrolo Web", true, undefined];
console.log(arr[1]); 29;

// typeof es una palabra reservada en JS que me devuelve el tipo de dato analizado. typeof devuelve un string: "boolean", "number", "object"
console.log( typeof arr[1] ); // number

// Validación respecto de arrays
console.log(typeof arr); // object


/* ARRAYS CREADOS A PARTIR DE UNA CLASE  */

// Otra forma de definir arrays
const apellidos = new Array("Juan");
apellidos[1] = "María";
console.log(apellidos);
console.log(typeof apellidos); // object


/* EVALUACIÓN DE ARRAYS  */

// Si typeof me devuelve que un array es de tipo objeto. ¿Cómo puedo hacer yo para evaluar si algo es o no es un array

// Array.isArray()
// Adentro del paréntesis el dato a evaluar
// Array.isArray(appellidos);

const isArray = Array.isArray(apellidos); // true || false
console.log(isArray);

console.log(Array.isArray(2)); // false


/** ARRAY MULTI DIMENSIONAL */

const matriz = [[1,2,3], [4,5,6], [7,8,9]];

console.log(matriz[1][2]); // 6
console.log(matriz[0][1]); // 2
console.log(matriz[3][2]); // undefined

// Conclusiones

// #1. Los arrays son objetos
// #2. Podemos tener arrays con elementos de distinto tipo de dato
// #3. (#1) Para saber si un elemento es o no un Array, vamos a usar la clase Array y su método is.Array(). Array.isArray(elementoAEvaluar);