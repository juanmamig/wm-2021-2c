// #1 Tengo que hacer una consulta http, por lo cuál necesito request.
const request = require('postman-request');

// Trae todos los productos
const getAllProducts = (callback) => {
  // #1 Perdirle los productos a una API
  const url = 'https://fakestoreapi.com/products';
  request(url, (err, res, body) => {

    // Si hay error de servidor de la API, va a ejecutar esto.
    if(err) {
      return callback(err, undefined);
    }
    
    // Si hay un error nuestro, de tipeo. Sabemos que la response va a tener un 404
    if(res.statusCode === 404) {
      return callback("Not Found", undefined);
    }

    const products = JSON.parse(body);
    return callback(undefined, products);
  });

}

// Trae un solo producto
const getSingleProduct = (id, callback) => {
  // const url = `https://fakestoreapi.com/products/${id}`;
  const url = `https://fakestoreapi.com/products/hola`;
  request(url, (err, res, body) => {
    if(err) {
                    //err //producto
      return callback(err, undefined);
    }

    // Handle de un timeOut. Custom error 524
    if(res.statusCode == 524) {
      console.log(res.statusCode);
      return callback("TimeOut", undefined);
    }

    const product = JSON.parse(body);
    return callback(undefined, product);
  })
}

module.exports = {
  getAllProducts,
  getSingleProduct
}