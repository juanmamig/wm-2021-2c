const request = require('postman-request');
const url = 'https://jsonplaceholder.typicode.com/posts';

const getAllProducts = (callback) => {
  request(url, (err, res, body) => {
    callback(body);
  });
}

const getDetalle = (id, callback) => {
  request(`${url}/${id}`, (err, res, body) => {
    callback(body);
  })
}

module.exports = { getAllProducts, getDetalle }