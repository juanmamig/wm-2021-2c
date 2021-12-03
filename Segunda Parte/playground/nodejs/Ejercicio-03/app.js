// Crear dos funciones. Una saludar y otra despedir que reciban como parámetros un nombre y con un console.log saluden o despidan según corresponda. Ejecutar ambas funciones desde el app.js y crearlas en un modulo aparte.

const saludos = require('./custom');
saludos.saludar("Juan");
saludos.despedir("Pedro");