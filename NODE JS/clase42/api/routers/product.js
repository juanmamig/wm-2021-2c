const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  //Falta DB
  res.send('Te devuelvo todos los productos');
});

router.post('/product', (req, res) => {
  //Falta DB
  res.send('Agrego un producto');
});

router.patch('/product/:id', (req, res) => {
  //Falta DB
  res.send('Actualizo un producto');
});

router.delete('/product/:id', (req, res) => {
  //Falta DB
  res.send('Elimino un producto');
});

module.exports = router;