const express = require('express')
const router = express.Router()
const getClient = require('../db/mongodb')

router.get('/products', (req, res) => {
    getClient((err, db) => {
        if(err) return res.send(err)
        db.collection('products').find().toArray((err, result) => {
        if(err) return res.send(err)
        return res.send(result)
        }) 
    })

})

router.post('/product', (req, res) => {
    console.log(req.body)
    const ar = []
    ar.push(req.body)
    getClient((err, db) => {
        if(err) return res.send(err)
        db.collection('products').insertMany(ar, (err, result) => {
        if(err) return res.send(err)
        return res.send(result)
        }) 
    })
})

router.patch('/product/:id', (req, res) => {
    res.send('Modifico un producto')
})

router.delete('/product/:id', (req, res) => {
    res.send('Elimino un producto')
})

module.exports = router