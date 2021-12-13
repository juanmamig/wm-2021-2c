// const fs = require('fs');
// const custom = require('./custom');

const path = require('path');

// Me creo un servidor
const express = require('express');
const appExpress = express();
const port = 3000;

// Le digo donde está la carpeta public
const publicURL = path.join(__dirname, '/public');
console.log(publicURL);

// Le digo que hay archivos estáticos para subir
appExpress.use(express.static(publicURL));

// Acá escucho otras peticiones del cliente
appExpress.get('/contacto', (req, res) => {
  // Le respondo con esto
  res.send('Página de Contacto');
});

appExpress.get('/ayuda', (req, res) => {
  res.send('Página de ayuda');
});

appExpress.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});