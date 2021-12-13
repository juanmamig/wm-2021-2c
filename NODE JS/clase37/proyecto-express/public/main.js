const products = [
  {
    name: 'pr1',
  },
  {
    name: 'pr2',
  },
  {
    name: 'pr3',
  },
  {
    name: 'pr1',
  },
  {
    name: 'pr2',
  },
  {
    name: 'pr3',
  }
];

const container = document.querySelector('.container');
products.forEach((el) => {
  const h2 = document.createElement('h2');
  h2.textContent = el.name;
  container.appendChild(h2);
});