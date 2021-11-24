// Comienzos: Var => Scope de funciones. Está disponible en cualquier lugar de la función

// Let y Const => Scope de bloque. Está solo disponible en un bloque. Por ejemplo en un if o un bucle.


// 1. Scope
// 2. Re definición
// 3. Invocar variable antes
// 4. Remplao de valor

console.log(puedePasar); // Se puede, da undefined. No se puede con let

const edad = 28;

if(edad > 18) {
  // Scope Global (O de función)
  var puedePasar = true;
}

// Se puede redeclarar
var puedePasar = false;

console.log(puedePasar);

if(edad > 18) {
  // Scope de bloque
  // No se puede redeclarar
  let puedePasar2 = true;
  const puedePasar3 = true;
}

// console.log(puedePasar2);
// console.log(puedePasar3);


function hello() {
  var meet = "Juan";
  console.log(meet);
}

// console.log(meet);// No queda scopeada 