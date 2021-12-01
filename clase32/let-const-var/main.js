//console.log(nombre); // Error. No se puede acceder antes de crearla
// console.log(dni); // Error. No se puede acceder antes de crearla
console.log(apellido); // Undefined


let nombre = "Juan";
const dni = 45666332;

var apellido = "Perez";
var apellido = 20;

console.log(apellido);

// #1. La definición de la variable es global, y va a dar undefined si la llamamos antes de ser definida. NO DA ERROR

// #2. Var permite ser re declarada nuevamente.

var edad = 20;

function saludo(nombre) {
  var saludoCompleto = `Hola ${nombre} tu edad es ${edad} y sos mayor de edad`;
  if(edad > 18) {
    // let saludoCompleto = `Hola ${nombre} tu edad es ${edad} y sos mayor de edad`;
    const saludoCompleto = `Hola ${nombre} tu edad es ${edad} y sos mayor de edad`;
  }
}

console.log(saludoCompleto);

saludo("Pedro");