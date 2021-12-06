const persona = {
  nombre: "Juan",
  apellido: "Perez",
  suscripcion: true,
  edad: 38
};

// Object Keys me devuelve un array en donde cada valor es el nombre de cada una de las keys del objeto. Parsea las keys a string
const keys = Object.keys(persona); //  ["nombre", "apellido", "suscripcion", "edad"]
const legthPersona = Object.keys(persona).length; // 2
// console.log(keys);

// Smilar al Object.keys, solo que me devuelve los valores en un Array. Importante: respeta el tipo de dato.
const values = Object.values(persona); //["Juan", "Perez", true, 38]
// console.log(values);

// A partir de un objeto, me devuelve una matriz respetando los key value pairs.
const matriz = Object.entries(persona);
// console.log(matriz);


const personaArray = [
  ['nombre', 'Juan'], 
  ['apellido', 'Perez']   
]

// A partir de una matriz, me convierte la misma en un objeto.
const personaObjeto = Object.fromEntries(personaArray);
console.log(personaObjeto);