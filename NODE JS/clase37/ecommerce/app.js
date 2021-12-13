const express = require('express');
const path = require('path');
const products = require('./utils/products');

const app = express();
const port = 3000;

// Esto me va a devolver un string con la ruta de la carpeta views.
const viewsURL = path.join(__dirname, 'views');
app.set('views', viewsURL);
app.set('view engine', 'ejs');

const publicURL = path.join(__dirname, 'public');
app.use(express.static(publicURL));

app.get('', (req, res) => {
  res.render('index', {
    products
  });
});

app.get('/contacto', (req, res) => {
  res.render('pages/contacto');
})

app.listen(port, () => {
  console.log('Escuchando en el puerto' + port);
});