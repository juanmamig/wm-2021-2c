/**
 * 
 * Dado un array con personas de distintas edades, crear una functión que reciba un número a filtrar, y devuelva un nuevo array solo con las personas mayores del parámetro recibido.
 * 
 * La función debe recibir un array el filtro de edad
 */

 const personas = [
  {
    nombre: "Juan",
    edad: 29
  },
  {
    nombre: "Martin",
    edad: 26
  },
  {
    nombre: "Antonella",
    edad: 33
  },
  {
    nombre: "Guillermina",
    edad: 36
  },
  {
    nombre: "Pedro",
    edad: 40
  }
];

const filtrarEdades = (arr = [], edad = 0) => {
  const nuevoArray = arr.filter(elemento => elemento.edad > edad);
  return nuevoArray;
}

console.log(filtrarEdades(personas, 29));