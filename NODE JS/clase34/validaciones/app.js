const validator = require('validator');

console.log(validator.isEmail('Hola'));
console.log(validator.isEmail('juan@juan.ci'));

const usuarios = require('./info');

// Opción 1
const usuariosConMailCorrecto = usuarios.filter((usuario) => { 
  // Si se cumple que el mail del usuario es correcto, lo pusheo al nuevo array
  return validator.isEmail(usuario.email);
});
console.log(usuariosConMailCorrecto);

// Opción 2
const usuariosCorrectos = [];
usuarios.forEach((usuario) => {
  if(validator.isEmail(usuario.email)) {
    usuariosCorrectos.push(usuario);
  }
});
console.log(usuariosCorrectos);

const texts = ["Hola! Como va?", "Mi nombre es Juan y tengo 26", "Mi nombre es Juan, tengo 26", "Hola"];

const textosSinCaracteres = texts.filter(texto => validator.isAlphanumeric(texto,undefined, {ignore: ' '}));

console.log(textosSinCaracteres);