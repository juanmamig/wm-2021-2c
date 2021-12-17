const request = require('postman-request');
const url = 'https://fakestoreapi.com/products';

request(url, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  if (body) {
    console.log(filterByPrice(body));
  }
});


function filterByPrice(products) {
  const _products = JSON.parse(products);
  return _products.filter((product) => product.price < 50);
}