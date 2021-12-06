const nombres = ["Juan", "Sofía", "Mariela"];

// Crear un nuevo array con los nombre cortos.

// Forma 1
const nombresCortos = nombres.filter((elemento) => {
  return elemento.length < 5;
})

// Forma 2
// const nombresCortos = nombres.filter((elemento) => elemento.length < 5);


// Crear un nuevo array con saludos.
const saludos = nombres.map((el) => "Hola " + el);


// Imprimir todos los elementos por consola
nombres.forEach((el) => {
  console.log(el);
})