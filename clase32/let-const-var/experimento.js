const nombres = ["Andrés", "Eric", "Andrea", "María"];

// for(let i = 0; i < nombres.length; i++){
//   console.log(`Primer for ${nombres[i]}`);
//   for(let i = 0; i < nombres.length; i++){
//     console.log(`Segundo for ${nombres[i]}`);
//   }
// }

let edad = 9;

if(edad < 10) {
  let menor = true;
  if(true) {
    console.log(menor); // true
  }
  console.log(menor); // true
}

// El for de la línea 5, SÍ PUEDE USAR el i de la linea 3.


// Primer for Andrés
// Segundo For "Andrés", Segundo For "Eric", Segundo For "Andrea",  Segundo For"María"

// Primer for Eric
// Segundo For "Andrés", Segundo For "Eric", Segundo For "Andrea",  Segundo For"María"

// Primer for Andrea
// Segundo For "Andrés", Segundo For "Eric", Segundo For "Andrea",  Segundo For"María"

// Primer for María
// Segundo For "Andrés", Segundo For "Eric", Segundo For "Andrea",  Segundo For"María"