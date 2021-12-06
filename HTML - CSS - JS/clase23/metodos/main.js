const edades = [];

// #1. Tengo un dato (array)
// #2. Uso el punto para acceder a sus métodos
// #3. Escribo el nombre del método
// #4. Abro y cierro paréntesis para ejecutar el método

// Método PUSH
// Agrega elementos AL FINAL DEL ARRAY
// No devuelve nada.

edades.push(29);
edades.push(39);
edades.push(40);
edades.push(39);
edades.push(39);

console.log("Nuevo array: ", edades);// [29, 39, 40];

// Método POP
// Elimina el último elemento del array
// Devuelve el elemento eliminado

const eliminado = edades.pop(); // [29, 39] 
console.log("El array sin el último es: ", edades);
console.log("El elemento eliminado es: ", eliminado);

// Método UNSHIFT (Similar al PUSH)
// Agrega elementos AL INICIO DEL ARRAY
// No devuelve nada.

edades.unshift(88);
console.log("El array con un nuevo elemento al principio es: ", edades);


// Método SHIFT (Similar al POP)
// Elimina el primer elemento del array
// Devuelve el elemento elminado

const eliminado2 = edades.shift();
console.log("El array sin el primer elemento es: ", edades);
console.log("El elemento eliminado es: ", eliminado2);


// Método INDEX OF
// Me sirve para buscar el índice de un elemento dentro del array. 
// Si lo encuentra, me devuelve el índice, y sino un -1
// Si hay más de un valor, solo me va a devolver el primero.
const indice = edades.indexOf(39);
console.log(edades);
console.log("El índice de 39 es: ", indice);
00