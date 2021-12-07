// Requiero el módulo y lo guardo en una constante.
const fs = require('fs');

// Me trae el return del módulo.
const saludos = require('./custom'); // { saludar, despedir, nombre }

console.log(saludos);
saludos.saludar("Pedro");
saludos.despedir("Sofía");
console.log(saludos.nombre);


fs.writeFileSync('nombres.txt', 'Mi nombre es Juan');
fs.appendFileSync('nombres.txt', 'Mi apellido es Perez');