// Funciones
// function a(b) {
//   return b*2;
// }

// const a = function(b){
//   return b*2
// }

// const a = (b) => {
//   return b*2;
// }

// const a = (b) => b*2;

// const a = b => b*2;

// a(10);

// Destructuring

const edades = [19, 23, 43, 56, 78];

// Crear dos variables llamadas "menor" y "mayor" utilizando destructuring, que tengan el menor valor y el mayor.


// El uso de , en destructuring SOLO ES PARA ARRAYS
const [menor,,,,mayor] = edades;
console.log(menor, mayor);

// Tipos de console
const personas = [
  {
    name: 'Juan',
    age: 23
  },
  {
    name: 'Pedro',
    age: 27
  }
]
console.table(edades);
console.table(personas);
console.error("Error de variable");

// Mostrar el id del local, usando destructuring

const libro = {
  id: 344,
  nombre: 'Harry Potter 2',
  autora: 'JK Rowling',
  local: {
    nombre: 'Ateneo',
    locacion: 'Buenos Aires',
    id: 7822
  }
};

const { id, local } = libro;
// Buscá la propiedad id dentro de local, y guardalo en una variable llamada idLocal
const { id:idLocal } = local;

console.log(id, local, idLocal);