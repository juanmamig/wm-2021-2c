// Dado un array de usuarios, crear un .txt que contenga solo los nombres y apellidos de los mayores de 18 años.

const fs = require('fs');
const usuarios = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 24
  },
  {
    nombre: 'Romina',
    apellido: 'Sanchez',
    edad: 16
  },
  {
    nombre: 'Chuque',
    apellido: 'Leró',
    edad: 29
  }
];

let texto = '';

usuarios.forEach((el) => {
  if(el.edad > 18) {
    texto+=`${el.nombre} ${el.apellido} \n`;
  }
});

fs.writeFileSync('Mayores.txt', texto);