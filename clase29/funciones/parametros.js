// // La función puede recibir "data", o parámetros.

// // Opción 1 => Validación
// function saludo(nombre = "Usuario") {
//   if (typeof nombre === "string" && nombre.trim() != "") {
//     console.log(`Hola ${nombre}`);
//   } else {
//     console.log("El dato ingresado no es correcto");
//   }
// }

// saludo("Juan");
// saludo("Sofía");

// saludo(2); // funciona
// saludo(true); // funciona
// saludo(null); // funciona
// saludo(NaN); // funciona

// saludo(); // Si no le paso un parámetro, el mismo queda como undefined

// saludo("  ");

// function suma(num1, num2) {
//   console.log(num1 + num2);
// }

// suma(1, 5); // 6
// suma(1, "5"); // "15"
// suma(1, true); // 2
// suma(1, false); // 1
// suma(1, NaN); // 
// suma(1); // 1

// 1. Dado un objeto con sueldo, crear una función llamada total que reciba un array de sueldos y imprima el total. Debe validar su función.

const sueldos = {
  2020: {
    "enero": 56000,
    "febrero": 58000,
    "marzo": 58000,
    "abril": 1,
    "mayo": 62000,
    "junio": 65000,
    "julio": 65000,
    "agosto": 65000,
    "septiembre": 70000,
    "octubre": 75000,
    "noviembre": 75000,
    "diciembre": 80000
  },
  2021: {
    "enero": 56000,
    "febrero": 58000,
    "marzo": 58000,
    "abril": 60000,
    "mayo": 62000,
    "junio": 65000,
    "julio": 65000,
    "agosto": 65000,
    "septiembre": 70000,
    "octubre": 75000,
    "noviembre": 75000,
    "diciembre": 80000
  }
}

const sueldosArr2020 = Object.values(sueldos["2020"]); // [56000, 58000, ...];
const sueldosArr2021 = Object.values(sueldos["2021"]); // [56000, 58000, ...];

function total(arreglo = []){
  if(Array.isArray(arreglo) && arreglo.length > 0) {
    let sumaTotal = 0;
    for(let i = 0; i < arreglo.length; i++) {
        sumaTotal += arreglo[i];
    }
    console.log(sumaTotal);
  } else {
    console.error("No sea gil, ingrese un array");
  }
}

total();
total(undefined);
total(sueldosArr2020);
total(sueldosArr2021);
total(NaN);
total(parser([]));