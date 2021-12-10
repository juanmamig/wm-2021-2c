const express = require('express');
const app = express();
const path = require('path');

// Vamos a configurar EJS.
// 1. Le tengo que decir a express dónde está la carpeta con las vistas.

const viewsDIR = path.join(__dirname, 'views'); // Es la ruta hacia la carpeta views
app.set('views', viewsDIR);
// Le decimos a express que vamos a estar usando EJS.
app.set('view engine', 'ejs');

// Le decimos a express que vamos a usar archivos estáticos que se los vamos a dar al cliente.
const publicDIR = path.join(__dirname, 'public');
app.use(express.static(publicDIR));

// Cuando el cliente pida la página principal, devuelvo el index de ejs.


app.get('/', (req, res) => {
  res.render('index', {
    title: "Página Principal",
  });
});

app.get('/contacto', (req, res) => {
  res.render('pages/contacto', {
    title: "Página de contacto"
  });
}); 

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});