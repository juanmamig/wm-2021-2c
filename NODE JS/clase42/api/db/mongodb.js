const mongodb = require('mongodb');
// Instancio la clase de MongoClient
const MongoClient = mongodb.MongoClient;

// Ruta del server local levantado desde la terminal
const url = "mongodb://localhost:27017";

// Utilizo el método connect para conectarme al server de mongo, local.
MongoClient.connect(url, (error, client) => {
  if (error) return console.log("Error de conexión");
  // Si paso el error, tengo disponible al  cliente
  console.log("Conectado a la DB");
  // Si no exite la DB, la crea.
  const db = client.db('ecommerce');

  // Utiliza una collection, y si no está, la crea.
  db.collection('products').insertOne({
    name: 'Xiaomi',
    price: 34000
  }, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
  });

});