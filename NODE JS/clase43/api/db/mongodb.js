const mongodb = require('mongodb');
// Instancio la clase de MongoClient
const MongoClient = mongodb.MongoClient;

// Ruta del server local levantado desde la terminal
const url = "mongodb://localhost:27017";

function getDbClient(callback) {
    // Utilizo el método connect para conectarme al server de mongo, local.
  MongoClient.connect(url, (error, client) => {
    if (error) {
      return callback(error, undefined);
    }
    // Si paso el error, tengo disponible al  cliente
    console.log("Conectado a la DB");
    // Si no exite la DB, la crea.
    const db = client.db('ecommerce');
    return callback(undefined, db);
  });
}

module.exports = getDbClient;