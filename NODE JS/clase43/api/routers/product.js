const express = require('express');
const router = express.Router();
const getDbClient = require('../db/mongodb');

router.get('/products', (req, res) => {
    getDbClient((error, db) => {
    if(error) {
      return res.send(error);
    }
    db.collection('products').find().toArray((err, result) => {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    });
  });
});

router.post('/product', (req, res) => {
  const data = req.body;

  getDbClient((error, db) => {
    if(error) {
      return res.send(error);
    }
    db.collection('products').insertOne(data, (err, result) => {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    });
  });
  
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