// Precio total.

/**
 * En Netflix, la empresa para la cuál trabajamos, tenemos un programa que nos calcula el precio que ganará la compañía ese mes con todas las suscripciones.
 * 
 * Crear un array de objetos que contenga como mínimo 3 objetos con las siguientes propiedades:
 * nombre (String), apellido(String), suscripcionActiva (Boolean), promocion (Number), precio (Number)
 * 
 * Algunas suscripciones estarán activas, otras no.
 * Algunas cuentas tendrán promociones (se aplica el descuento en base 100) y otras no (estas otras tendrán null).
 * 
 * Armar un programa que nos calcule el total de suscripciones de ese mes.
 */


// const suscripciones = [
//   {
//     nombre: "Juan",
//     apellido: "Perez",
//     suscripcionActiva: true,
//     promocion: null,
//     precio: 1200
//   },
//   {
//     nombre: "Jorge",
//     apellido: "Estefano",
//     suscripcionActiva: false,
//     promocion: 20,
//     precio: 1200
//   },
//   {
//     nombre: "Mariela",
//     apellido: "Lopez",
//     suscripcionActiva: true,
//     promocion: 20,
//     precio: 1200
//   }
// ];

// let total = 0;
// for (let i = 0; i < suscripciones.length; i++) {
//   if(suscripciones[i].suscripcionActiva) {
//     if(suscripciones[i].promocion) {
//       const precio = suscripciones[i].precio;
//       const promocion = suscripciones[i].promocion;
//       const totalDto = precio*promocion/100;
//       total += precio - totalDto;
//     } else {
//       total =+ suscripciones[i].precio;
//     }
//   }
// }

// console.log(total);


// Sumar meses usando como base el método Object.values()
// 1. Armar un array con todos los valores
// 2. Iterar ese array sumando cada uno de los mismos.

// Se podría realizar con cualquier tipo de bucle, pero utilizamos este como práctica.

const empleado = {
  2020: {
    enero: 36000
  },
  2021: {
    enero: 56000,
    febrero: 58000,
    marzo: 58000,
    abril: 60000,
    mayo: 62000,
    junio: 65000,
    julio: 65000,
    agosto: 65000,
    septiembre: 70000,
    octubre: 75000,
    noviembre: 75000,
    diciembre: 80000
  }
}

const valuesArray = Object.values(empleado[2021]);
let total = 0;
for(let i = 0; i < valuesArray.length; i++) {
  total += valuesArray[i];
}

console.log(total);


