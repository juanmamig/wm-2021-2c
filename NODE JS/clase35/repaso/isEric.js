// function isEric(nombre) {
//   if(nombre === 'eric') {
//     return true
//   }
//   return false;
// }

// const isEric = (nombre) => {
//   if(nombre === 'eric') {
//     return true
//   }
//   return false;
// }

const check = nombre => (nombre === 'eric') ? true : false;

// Operador Ternario
// (nombre === 'eric') ? true : false;
// Condición a evaluar    DC      DF

// DC: Devolución correcta
// DF: Devolución incorrecta

// Evaluo una condición antes del signo de pregunta.
// Si se cumple, devuelvo lo que sea que ponga entre el signo de pregunta y los dos puntos.
// Si no se cumple, devuelvo lo que sea que ponga después de los dos puntos: 

module.exports = { check }