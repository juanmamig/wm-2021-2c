let nombres = ["Juan", "Pedro"];
// let nuevosNombres = nombres; // NO CLONA EL ARRAY
let nuevosNombres = nombres.slice(); // SÍ CLONA EL ARRAY

nuevosNombres.push("Rodrigo");
console.log(nombres);
console.log(nuevosNombres);


const edades = [33, 34, 35, 36, 37, 38, 39];
// const nuevasEdades = edades.slice(2); //  [35 - 39]
const nuevasEdades = edades.slice(2,4); //  [35 - 37)
console.log("Nuevas Edades", nuevasEdades);

// ¿Esto pasaba así con strings, o numbers?

let nombre = "Juan";
let nuevoNombre = nombre;

nuevoNombre = "María";
console.log(nombre); // "Juan"
