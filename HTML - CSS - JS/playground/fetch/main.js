fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => { iterateAndCreate(products) });

const flexContainer = document.querySelector('.flex-container');

const createProducts = (product = {}) => {
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');
  const productTitle = document.createElement('h2');
  productTitle.textContent = product.title;
  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  const productImage = document.createElement('img');
  productImage.setAttribute('src', product.image);

  productContainer.appendChild(productTitle);
  productContainer.appendChild(productDescription);
  productContainer.appendChild(productImage);

  return productContainer;
};

const iterateAndCreate = (arr = []) => {
  arr.forEach((el) => {
    flexContainer.appendChild(createProducts(el));
  })
}