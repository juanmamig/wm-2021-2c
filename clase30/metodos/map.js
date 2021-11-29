// ES6
const nombres = ["Juan", "Sofía", "Mariela"];

// El map me devuelve un nuevo array que cumpla con la lógica que escriba dentro del callback
const saludos = nombres.map(function(elemento){
  return "Hola " + elemento; 
});

console.log(saludos);