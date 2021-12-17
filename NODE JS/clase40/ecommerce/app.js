const express = require('express');
const path = require('path');
const productsModule = require('./utils/products');

const app = express();
const port = 3000;

const viewsURL = path.join(__dirname, 'views');
app.set('views', viewsURL);
app.set('view engine', 'ejs');

app.use(express.json());

const publicURL = path.join(__dirname, 'public');
app.use(express.static(publicURL));

app.get('', (req, res) => {
  productsModule.getAllProducts((products) => {
    res.render('index', {
      products
    })
  });
});

app.get('/detalle/:id', (req, res) => {
  // Traer el id que manda el cliente y está disponible en el objeto params.
  const id = req.params.id;
  productsModule.getSingleProduct(id, (product) => {
    // Renderizo Página de detalle
    console.log(product);
    res.render('pages/detalle', {
      product
    })
  })
})

app.get('/contacto', (req, res) => {
  res.render('pages/contacto');
})

app.post('/consulta', (req, res) => {
  const dataCliente = req.body;
  console.log(dataCliente);
  // enviarMail(dataCliente)
  // agregarALaBase(dataCliente)
});

app.listen(port, () => {
  console.log('Escuchando en el puerto' + port);
});