let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 39,
  tieneMascota: false
}

// Acceder a propiedades:

// 1 Mediante DOT Notation (Es la más común)
console.log(persona.apellido);

// 2. Mediante bracket notation (No es tan popular)
console.log(persona["nombre"]);


// Sobre escribir propiedades
persona.nombre = "Sofía";
persona["edad"] = 40;
console.log(persona.nombre);  // Sofía

for (let propiedad in persona) {
  console.log(`Propiedad: ${propiedad}`);
  console.log(`Valor: ${persona[propiedad]}`);
}

let productos = [
  {
    title: "1 Bicicleta Mountain Bike Shifter R26 21v Mtb Acero",
    seller: "Vendido por Mall 360",
    price: 63999,
    dto: 54,
    finalPrice: 28999,
    freeShiping: true,
    inOffer: true,
    img: {
      src: 'https://http2.mlstatic.com/D_NQ_NP_791280-MLA48023241963_102021-V.webp',
      alt: 'Bicicleta Mountain Bike Shifter R26 21v Mtb Acero'
    }
  },
  {
    title: "2 Bicicleta Mountain Bike Shifter R26 21v Mtb Acero",
    seller: "Vendido por Mall 360",
    price: 63999,
    dto: 54,
    finalPrice: 28999,
    freeShiping: true,
    inOffer: true,
    img: {
      src: 'https://http2.mlstatic.com/D_NQ_NP_791280-MLA48023241963_102021-V.webp',
      alt: 'Bicicleta Mountain Bike Shifter R26 21v Mtb Acero'
    }
  },
  {
    title: "3 Bicicleta Mountain Bike Shifter R26 21v Mtb Acero",
    seller: "Vendido por Mall 360",
    price: 63999,
    dto: 54,
    finalPrice: 28999,
    freeShiping: true,
    inOffer: true,
    img: {
      src: 'https://http2.mlstatic.com/D_NQ_NP_791280-MLA48023241963_102021-V.webp',
      alt: 'Bicicleta Mountain Bike Shifter R26 21v Mtb Acero'
    }
  }
];

for(let i = 0; i < productos.length; i++) {
  for(let prodpiedad in productos[i]) {
    console.log(`El ${prodpiedad} es ${productos[i][prodpiedad]}`);
  }
}


// LAB

// NO ESTÁ BUENO PARA HACER
let experimento = {
  "mi nombre": "Juan",
  "segundo apellido": "Gomez"
}

// Para acceder:
console.log(experimento["mi nombre"]);
console.log(experimento["segundo apellido"]);
