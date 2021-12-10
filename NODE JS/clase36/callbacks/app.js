// Quiero hacer una consulta http, ¿cómo hago? Usando Postman Request
const postmanRequest = require('postman-request');

// Postman requets recibe dos parámetros:

// 1. La ruta a consultar info
// 2. Una función callback que se ejecuta cuando la data esté lista.

//3. Esta función callback, recibe a su vez 3 parámetros. Error, por si hay un error en el servicio, response que es la respuesta, y body que es el JSON.
postmanRequest('http://fakestoreapi.com/products?limit=5', function(error, response, body){
  // console.log(error);
  // console.log(response);
  console.log(body);
});