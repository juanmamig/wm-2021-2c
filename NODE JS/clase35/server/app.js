const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// console.log(__filename);
// console.log(__dirname);

const rutaPublica = path.join(__dirname, '/public');
app.use(express.static(rutaPublica));

// El cliente hace una consulta GET. El get es una petición de solo lectura y el servidor devuelve lo que nosotros queramos.
app.get('', (req, res) => {
  res.send('<p>Bienvenido a la pagina principal</p>');
})

app.get('/usuarios', (req, res) => {
  res.json([
    {name: 'Juan'},
    {name: 'Sofía'}
  ])
})

app.get('/contacto', (req, res) => {
  res.send('Contacto');
});


// Inicia el servidor.
app.listen(port, () => {
  console.log("Aplicación corriendo en el puerto " + port);
});
