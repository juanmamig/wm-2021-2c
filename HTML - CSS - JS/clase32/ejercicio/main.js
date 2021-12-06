const producto = [
  {
    nombre: 'Reloj',
    precio: 123
  },
  {
    nombre: 'Remera',
    precio: 1223
  },
  {
    nombre: 'Pantalon',
    precio: 1520
  },
  {
    nombre: 'Cinturon',
    precio: 1001
  },
  {
    nombre: 'Muñecos',
    precio: 1001
  }
];


producto.forEach((el) => {
  const div = document.createElement('div');
  const { nombre, precio } = el;
  div.classList.add('product');

  const h2 = document.createElement('h2');
  h2.textContent = nombre;
  div.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = precio;
  div.appendChild(p);

  const contenedorFlex = document.querySelector('.contenedor-flex')
  contenedorFlex.appendChild(div);
});
