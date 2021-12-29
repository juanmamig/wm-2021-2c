const request = require('postman-request');
const APIBASEURL = 'http://localhost:3001';

const getAllProducts = (callback) => {
  request(`${APIBASEURL}/products`, (err, res) => {
    if(err) return callback(err, undefined);
    callback(undefined, res.body);
  })
}

const getSingleProduct = (id, callback) => {
  request(`${APIBASEURL}/product/${id}`, (err, res) => {
    if(err) return callback(err, undefined);
    callback(undefined, res.body);
  })
} 

module.exports = { getAllProducts, getSingleProduct }