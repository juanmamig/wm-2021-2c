

/**
 * Para entrar al curso de Avanzado, los estudiantes tienen que saber sí o sí html y css.
 * 
 * #1 Preguntarle al usuario sus saberes y en relación a eso, decirle si es apto para el curso o no.
 * 
* #2 Preguntarle al usuario sus saberes si solo sabe html pero no sabe CSS le ofrezco un curso de CSS, y sino de HTML
 * 
 * saber1 y saber2 van a ser dos variables que no están definidas.
 */


// Op 1
// let html, css;

// html = prompt("¿Sabés HTML?").toLowerCase();
// css = prompt("¿Sabés CSS?").toLowerCase();

// if(html == "si" && css == "si") {
//   console.log("Es apto para el curso");
// } else {
//   console.log("No es apto para el curso");
// }

// Op 2

// let html,css;

// html = prompt("¿Sabés HTML?").toLowerCase();
// if(html == "si" ) {
//   css = prompt("¿Sabés CSS?").toLowerCase();
//   if(css== "si") {
//     console.log("Sos apto para el curso");
//   } else {
//     console.log("No podés ingresar al curso, pero tenemos un curso de CSS para vos");
//   }
// } else {
//   console.log("No podés ingresar al curso, pero tenemos un curso de HTML para vos");
// }


// Op 3
// let html,css;

// html = prompt("¿Sabés HTML?").toLowerCase();
// css = prompt("¿Sabés CSS?").toLowerCase();

// if(html == "si" && css == "si") {
//   console.log("Sos apto para el curso");
// } else  {
//   if(html === "si") {
//     console.log("Tengo un curso de CSS para ofrecerte");
//   } else {
//     console.log("Tengo un curso de HTML para ofrecerte");
//   }
// }


// // Op 4

// let html,css;

// html = prompt("¿Sabés HTML?").toLowerCase();
// css = prompt("¿Sabés CSS?").toLowerCase();

// if(html == "si" && css == "si") {
//   console.log("Sos apto para el curso");
// } else if(html === "si") {
//   console.log("Tengo un curso de CSS para ofrecerte");
// } else {
//   console.log("Tengo un curso de HTML para ofrecerte");
// }

// Se pueden evaluar las condiciones que queramos. Si utilizamos el && lo que estamos diciendo es que todas deberán ser verdaderas
// if(html == "si" && css == "si" && js == "si") {

// }

// Se puede escribir un if con una condición y su ejecución al lado, sin llaves.
// if(true) console.log("True!");

let residente, pase;

residente = prompt("¿Sos residente?").toLowerCase();
pase = prompt("¿Tenés un pase?").toLowerCase();

if(residente == "si" || pase == "si") {
  console.log("Podés pasar");
} else {
  console.log("No podés pasar");
}
