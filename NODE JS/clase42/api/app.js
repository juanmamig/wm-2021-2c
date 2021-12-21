const express = require('express');
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

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
})