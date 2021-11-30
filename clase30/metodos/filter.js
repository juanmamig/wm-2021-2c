const nombres = ["Juan", "Sofía", "Mariela"];

// 1. Como el filter me devuelve un nuevo array, lo guardo en una constante nueva.
// 2. Ejecuto el método filter y le paso su callback
// 3. Dentro del callback seteo la lógica de filtros y devuelvo lo que necesite guardar en el array
const nombresCortos = nombres.filter(function(elemento){
  return elemento.length <= 5;
}); // ["Juan", "Sofía"];

console.log(nombresCortos);


const viajes = [
  {
    destino: "Rio de Janeiro",
    tipo: 'internacional'
  },
  {
    destino: "Salta",
    tipo: 'nacional'
  },
  {
    destino: "Seúl",
    tipo: 'internacional'
  },
  {
    destino: "Jujuy",
    tipo: 'nacional'
  },
  {
    destino: "Calafate",
    tipo: 'nacional'
  }
];

// Forma con función definida
const callBackNacionales = function(el){
  return el.tipo === "nacional";
}
const viajesNacionales = viajes.filter(callBackNacionales);

// Forma Anónima
// const viajesNacionales = viajes.filter(function(el){
//   return el.tipo === 'nacional';
// });

console.log(viajesNacionales);



//======= Ejercicio 2

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

function filtrar(arr = [], categoria = ''){
  const productosFiltrados = arr.filter(function(elemento){
    return elemento.categoria === categoria;
  });
  return productosFiltrados;
}

const productosTela = filtrar(productosNavidenios, 'tela');
const productosMadera = filtrar(productosNavidenios, 'madera');

console.log(productosMadera, productosTela);
