console.log("Mi propio módulo");
const nombre = "Juan";

const saludar = function(nombre = "") {
  console.log(`Hola ${nombre}`);
}

const despedir = function(nombre = "") {
  console.log(`Chau ${nombre}`);
}

// Es como el return del módulo
module.exports = {
  saludar,
  despedir,
  nombre
};