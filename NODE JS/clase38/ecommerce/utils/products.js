const request = require('postman-request');
const url = 'https://jsonplaceholder.typicode.com/posts';

const getAllProducts = (callback) => {
  request(url, (err, res, body) => {
    callback(body);
  });
}

module.exports = { getAllProducts }