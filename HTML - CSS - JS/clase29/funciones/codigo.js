// Hacer una función que reciba el nombre, apellido y dni de una y armar un codigo de descuento con la inicial de la persona, el apellido y el DNI;

const generarCodigo = function(nombre = "", apellido = "", dni = 0) {
  const inicialNombre = nombre[0];
  const inicialApellido = apellido[0];

  return inicialNombre + inicialApellido + dni;
}

console.log(generarCodigo("Agus", "Bardelli", 43123123));
console.log(generarCodigo("Lucas", "Capalbo", 45123123));

