// ITERACIÓN

const nombres = ["Juan", "Sofía", "Mariela", "María"];

// Podemos iterar con for clásico
// Podemos iterar con forEach
// Podemos iterar con for...of
for(let valor of nombres) {
  console.log(valor);
}

// DESTRUCTURING ARRAYS

// const primerNombre = nombres[0];

// Me está creando una variable llamada primerNombre. Como esta variable está en el primer lugar del array, me va a guardar el primer valor de nombre.
// const [primerNombre] = nombres;
const [primerNombre, segundoNombre] = nombres;
console.log(primerNombre, segundoNombre);

const [,,,cuarto] = nombres;
console.log(cuarto);

// Dependiendo la posición del elemento del array de la izquierda, me va a traer su valor correspondiente.


const mezcla = ["Juan", true, undefined, null, 12, 3];
const [,boolean] = mezcla;
//     0 1


// DESTRUCTURING OBJETOS

const persona = {
  nombre: "Juan",
  edad: 45,
  mascota: {
    nombre: "Titán"
  }
}

// const nombre = persona.nombre;
// const edad = persona.edad;

const { nombre, edad, mascota }  = persona;

// Esto crea una variable llamada nombreMascota, que tiene el valor de mascota.nombre;
const { nombre:nombreMascota } = mascota;
console.log(nombre, edad, mascota, nombreMascota);


// Aplicación

const productosNavidenios = [
  {
    name: 'Bandeja',
    categoria: 'madera'
  },
  {
    name: 'Cajas',
    categoria: 'madera'
  },
  {
    name: 'Muñecos',
    categoria: 'tela'
  },
  {
    name: 'Guirnaldas',
    categoria: 'tela'
  }
];


// const productosTela = productosNavidenios.filter((el) => {
//   const { categoria } = el;
//   return categoria === 'tela';
// });
