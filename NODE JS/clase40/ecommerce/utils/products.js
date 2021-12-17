// #1 Tengo que hacer una consulta http, por lo cuál necesito request.
const request = require('postman-request');

// Trae todos los productos
const getAllProducts = (callback) => {
  // #1 Perdirle los productos a una API
  const url = 'https://fakestoreapi.com/products';
  request(url, (err, res, body) => {
    const products = JSON.parse(body);
    callback(products);
  });

}

// Trae un solo producto
const getSingleProduct = (id, callback) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  request(url, (err, res, body) => {
    const product = JSON.parse(body);
    callback(product);
  })
}

module.exports = {
  getAllProducts,
  getSingleProduct
}