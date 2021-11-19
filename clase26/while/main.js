// Opción #1
// let valor = NaN;

// while(Number.isNaN(valor) || valor === "") {
//   valor = prompt("Ingrese un número");
//   if(valor != "") {
//     valor = Number(valor);
//   }
// }

// console.log("Ingresó el número" + valor);

// Opción #2
let valor = prompt("Ingrese un número");

// Valido que ingrese algo sí o sí
while(valor === "") {
  valor = prompt("Ingrese un número");
}

// Convierto lo ingresado a número (Me puede devolver NaN);
valor = Number(valor);

while(Number.isNaN(valor)) {
  valor = Number(prompt("Ingrese un número"));
}

console.log(valor);