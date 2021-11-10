const productos = ["Porotos", "Lentejas", "Cereales"];

let i = 0;
console.log(productos[i]); // Porotos

i++; // Sumaba 1
console.log(productos[i]); // Lentejas

i++; // Sumaba 1
console.log(productos[i]); // Cereales


for(let i = 0; i < 50; i++) {
  console.log("Esta es la vuelta número " + i);
}

// productos.length //3
for(let i = 0; i < productos.length; i++){
  console.log(productos[i]);
}