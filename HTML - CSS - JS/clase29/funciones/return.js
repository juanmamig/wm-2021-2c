const poblacion = [
  {
    nombre: "Gladys",
    edad: 55,
    esDeRiesgo: true
  },
  {
    nombre: "Jorge",
    edad: 75,
    esDeRiesgo: true
  },
  {
    nombre: "Matilde",
    edad: 75,
    esDeRiesgo: false
  }
];

/**
 * 1. Definir una función establecerPrioridad
 *    
 */

function validar(edad, esDeRiesgo) {
  if(edad > 65 && esDeRiesgo) {
    return 1;
  }
  
  if( edad > 65 && !esDeRiesgo) {
    return 2;
  }
  return 3;
}

function establecerPrioridad(poblacion = []) {
  let numeroRiesgo;
  for(let i = 0; i < poblacion.length; i++) {
    numeroRiesgo = validar(poblacion[i].edad, poblacion[i].esDeRiesgo);
    poblacion[i].prioridad = numeroRiesgo;
  }
  return poblacion;
}

const poblacionConPrioridad = establecerPrioridad(poblacion);
console.log(poblacionConPrioridad);