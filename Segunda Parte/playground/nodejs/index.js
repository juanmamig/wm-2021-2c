const fs = require('fs');
const custom = require('./custom');
console.log("Bienvenidxs!");

fs.writeFileSync('notex.txt', 'Creando un PDF');
fs.appendFileSync('notex.txt', 'Agrego un nuevo archivo');


console.log(custom);