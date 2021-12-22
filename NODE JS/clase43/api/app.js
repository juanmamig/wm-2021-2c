const express = require('express');

// SOLO PARA VER COMO REEMPLAZAR POSTMAN | NO USAR
const page = require('./test');
// SOLO PARA VER COMO REEMPLAZAR POSTMAN | NO USAR


const app = express();
// Vamos a usar el router de express. Lo importamos
const router = express.Router();
const port = 3000;

// Habilito tener disponible el req.body
app.use(express.json());
// Usamos el router en nuestra app
app.use(router);

// Importo el router de productos y lo uso
const productRouter = require('./routers/product');
app.use(productRouter);

// SOLO PARA VER COMO REEMPLAZAR POSTMAN | NO USAR
app.get('', (req, res)=> {
  res.send(page);
})
// SOLO PARA VER COMO REEMPLAZAR POSTMAN | NO USAR


app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
})