// ES6
const nombres = ["Juan", "Sofía", "Mariela"];

// El map me devuelve un nuevo array que cumpla con la lógica que escriba dentro del callback

// nombres.map();
// Recibe un callback
// nombres.map(function(){});
// Ese callback recibe hasta 3 parámetros. El primero es el elemento
// nombres.map(function(elemento){})
const saludos = nombres.map(function(elemento){
  return "Hola " + elemento; 
});

console.log(saludos); // ["Hola Juan", "Hola Sofía", "Hola Mariela"];