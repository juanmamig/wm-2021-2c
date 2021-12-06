let producto = {
  nombre: "Agua",
  precio: 315
}

// Propiedades: nombre, precio
// Valores: "Agua", 15

// producto["nombre"] => "Agua"
// producto["precio"] => 315


// Es un bucle que se va a ejecutar según la cantidad de propiedades que tenga
for(let key in producto) {
  console.log(key); // nombre, precio
  console.log(producto[key]); // "Agua", 15
}


// =================


const productos = [
  {
    nombre: "Agua",
    precio: 315
  },
  {
    nombre: "Jugo de Arándanos",
    precio: 180
  }
];

// 1 Iteramos como sabemos iterar arrays

for(let i = 0; i < productos.length; i++) {
  // For que solo funciona para objetos
  for(let propiedad in productos[i]) {
    console.log(productos[i][propiedad]);
  }
}