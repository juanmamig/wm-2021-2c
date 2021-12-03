// Creamos un objeto
const ciudad = "Buenos Aires";

const persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 38,
  mascota: {
    nombre: "Titán",
    especie: "Perro",
    raza: "Labrador"
  },
  saludo: console.log("Hola"),
  generoMusical: ['rock', 'pop'],
  dondeVive: ciudad,
  nombreYApellido: this.nombre + this.apellido
}

// Como acceder
// console.log(persona1["mascota"]["nombre"]);
// console.log(persona1.mascota.nombre);

// Probamos la mutabilidad del objeto
const persona2 = persona1;
persona2.nombre = "Julia";
// console.log(persona1); // ¿Cuál va a ser el nombre? Julia


// Clonamos EL PRIMER NIVEL del objeto, a uno nuevo.
const clonPersona1 = {};
Object.assign(clonPersona1, persona1);
clonPersona1.mascota.nombre = "Mora";

// Probamos que la clonación funcionó.
clonPersona1.nombre = "Gladys";


console.log("Persona 1", persona1); // { nombre: "Julia", apellido: "Perez"}
console.log("ClonPersona 1", clonPersona1); // { nombre: "Gladys", apellido: "Perez"}


// JSON
/** En la web vamos a trabajar mucho con objetos JSON. Cuando pidamos un objeto JSON, es muy probable que nos llegue en forma de String. Para manipularlo dentro de JavaScript, vamos a parsearlo a un objeto. 
 * 
De la mimsa manera si queremos enviar información mediante un objeto JSON, vamos a convertirlo en un String antes de mandarlo.
 */
const stringJson = `
{
  "nombre": "Juan",
  "apellido": "Perez",
  "mascota": {
    "nombre": "Titán",
    "especie": "Perro",
    "raza": "Labrador"
  }
}
`;



// const jsonParsed = JSON.parse(stringJson);
// console.log(jsonParsed);