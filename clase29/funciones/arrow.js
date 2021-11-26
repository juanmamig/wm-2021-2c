// Opción 1 (Hoisting)
// function suma(a,b) {
//   return a+b;
// }

// Opción 2
// const suma = function (a,b) {
//   return a+b;
// }

// Opción 3

// () => {}

// const suma = (a,b) => {
//   return a + b;
// }

// Si no tiene {} y está en una sola línea, el return está implícito.
const suma = (a,b) => a + b;

console.log(suma(4,4))