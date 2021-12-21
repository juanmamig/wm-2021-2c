const express = require('express');
const { userInfo } = require('os');
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
  productsModule.getAllProducts((error, products) => {
    if (error) {
      return res
      .status(`404`)
      .send(error);
    }

    return res.render('index', {
      products
    })
  });
});

app.get('/detalle/:id', (req, res) => {
  // Traer el id que manda el cliente y está disponible en el objeto params.
  const id = req.params.id;
  productsModule.getSingleProduct(id, (error, product) => {
    if(error) {
      return res.send(error);
    }
    
    // Renderizo Página de detalle
    return res.render('pages/detalle', {
      product
    })
  })
})

app.get('/contacto', (req, res) => {
  res.render('pages/contacto');
})

app.post('/consulta', (req, res) => {
  const dataCliente = req.body;
  res.send({message: "Consulta enviada", dataCliente });
  // enviarMail(dataCliente) (Puede ser exitoso o no)
  // agregarALaBase(dataCliente) (Puede ser exitoso o no)
});

app.get('/queryTest', (req, res) => {
  // const query = req.query;
  const { query } = req;
  // Recibimos variables mediante query params y podemos hacer filtros o lo que necesitemos
  res.send(query);
})

app.listen(port, () => {
  console.log('Escuchando en el puerto' + port);
});