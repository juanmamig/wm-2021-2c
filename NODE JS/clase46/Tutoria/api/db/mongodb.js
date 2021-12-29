const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017'

function getClient (callback){
    MongoClient.connect(url, (err, client) => {
        if(err) callback(err, undefined)
        console.log('Conectado a la DB')
        const db = client.db('newecommerce')
        
    
        return callback(undefined, db)
    })
    
}

module.exports = getClient
