const validator = require('validator');
const isEric = require('./isEric');

// Chequear si un email es correcto
console.log(validator.isEmail('juanma@gmail.com'));

console.log(isEric.check('eric'));