const persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 38,
  mascota: {
    nombre: "Titán",
    especie: "Perro",
    raza: "Labrador"
  }
}

// Método para clonar objetos con múltiples niveles PERO CON DATOS SIMPLES

// 1. Paso el objeto a STRING y con eso se rompe la referencia.
let clonDePersona1 = JSON.stringify(persona1);
console.log(typeof clonDePersona1);

// 2. Ese string, lo convierto ahora en objeto.
let clonDePersona1Parsed = JSON.parse(clonDePersona1);
console.log(typeof clonDePersona1Parsed);

// 3. Puedo sobre escribirlo pues se ha clonado en múltiples niveles.
clonDePersona1Parsed.mascota.nombre = "Salchi";

console.log("Persona 1", persona1);
console.log("ClonPersona1", clonDePersona1Parsed); 
