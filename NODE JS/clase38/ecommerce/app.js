const express = require('express');
const path = require('path');
const product = require('./utils/products');
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
  product.getAllProducts((bodyRecibido) => {
    res.render('index', {
      products: JSON.parse(bodyRecibido)
    });
  });
});

// Lo que sea que me mande el cliente después de detalle/, lo voy a guardar en una variable llamada id. Es decir:

//Si cliente escribe http://misitio.com/detalle/10, id = 10;
//Si cliente escribe http://misitio.com/detalle/hola, id = hola;

app.get('/detalle/:id', (req, res) => {
  // const params = req.params.id;
  const { params } = req;
  const { id } = params;

  product.getDetalle(id, (bodyRecibido) => {
    res.render('pages/detalle', {
      product: JSON.parse(bodyRecibido)
    });
  });

  // Traigas la información de ese producto.
  // ¿ Y cómo hago eso?
  // Hay un servicio que se llama https://jsonplaceholder.typicode.com/posts/10 que si le mandás el número de id al final, te devuelve un json con la información del producto. Esto es una consluta http.
});

app.get('/api', (req, res) => {
  res.json([{id: 1}, {id: 2}]);
})


app.get('/contacto', (req, res) => {
  res.render('pages/contacto');
})

app.listen(port, () => {
  console.log('Escuchando en el puerto' + port);
});