// Queremos lograr que al hacer click sobre los productos, se complete la información correspondiente en un modal. En este caso cuando hagamos click en los <li> se debería completar el modal.

// Paso 1: Creo una constante de productos que va a ser un array con todos los productos.

const productos = [
  {
    id: 1,
    nombre: 'Bandeja',
    descripcion: 'Que linda baneja',
    precio: 1234
  },
  {
    id: 2,
    nombre: 'Carteles',
    descripcion: 'Que lindo cartel',
    precio: 2341
  },
  {
    id: 3,
    nombre: 'Muñeco',
    descripcion: 'Que lindo muñeco',
    precio: 3412
  },
  {
    id: 4,
    nombre: 'Servilleteros',
    descripcion: 'Que lindo servilletero',
    precio: 3412
  }
];

// Paso 2: Creo un evento de click por cada producto que en este caso son los li.

const allLi = document.querySelectorAll('li');
allLi.forEach((el) => {

  el.addEventListener('click', (infoEvent) => {
    // 1. Levanto el id del data-id
    const id = infoEvent.target.dataset.id;
    // 2. Filtro el array de productos y me quedo con el objeto cuyo id es igual al id del producto que clikearon
    const productoFiltrado = productos.filter((el) => el.id == id);
    
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalPrice = document.querySelector('.modal-price');

    modalTitle.textContent = productoFiltrado[0].nombre;
    modalDescription.textContent = productoFiltrado[0].descripcion;
    modalPrice.textContent = productoFiltrado[0].precio;
  });
});

// Paso 3: De alguna manera tengo que enviar el id del producto para filtrarlos, al momento que hago click.

// Paso 4: Pasarle al modal la info.