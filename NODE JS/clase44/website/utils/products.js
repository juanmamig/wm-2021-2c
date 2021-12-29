const request = require('postman-request');

const baseURL = 'http://localhost:3001';

const getAllProducts = (callback) => {
  request(`${baseURL}/products`, (err, res) => {
    if(err) return callback(err, undefined);
    const allProducts = JSON.parse(res.body);
    return callback(undefined, allProducts);
  });
};

const getSingleProduct = (callback) => {
  request(`${baseURL}/product/123`, (err, res) => {
    if(err) return callback(err, undefined);
    const singleProduct = res.body;
    return callback(undefined, singleProduct);
  });
};


module.exports = { getAllProducts, getSingleProduct };