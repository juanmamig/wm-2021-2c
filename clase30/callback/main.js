const log = console.log;

function saludo() {
  log("Hola!");
}

// Valores por defecto.
// function saludar(arrayRecibido = []);
// function saludar(objetoRecibido = {});
// function saludar(stringRecibido = "Usario");
// function saludar(funcionRecibida = function(){});

function saludar(funcionRecibida) {
  funcionRecibida();
}

saludar(saludo); // Hola!
saludar(function(){ log("Adiós!") }); // Adiós!

// Función Anónima
// function(){};