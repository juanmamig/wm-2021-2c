const { ObjectId } = require('mongodb');
const express = require('express')
const router = express.Router()
const getClient = require('../db/mongodb')

router.get('/products', (req, res) => {
    getClient((err, db) => {
        if (err) return res.send(err)
        db.collection('products').find().toArray((err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })
})

router.post('/product', (req, res) => {
    const ar = []
    ar.push(req.body);
    req.body.created = new Date()

    getClient((err, db) => {
        if (err) return res.send(err)
        db.collection('products').insertMany(ar, (err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })
})

router.patch('/product/:id', (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    getClient((err, db) => {
        if(err) return res.status(500).send(err);
        // updateOne({1}, {2}, cb)
        // {1} => A quién quiero actualizar
        // {2} => Qué quiero modificar
        // cb => Callback
        db.collection('products').updateOne(
            { _id: new ObjectId(id)}, 
            { $set: { price } },
            (err, result) => {
                if(err) return res.status(500).send(err);
                return res.send(result);
            }
        );
    });
});

router.delete('/product/:id', (req, res) => {
    // Me conecto
    const id = req.params;
    getClient((err, db) => {
        if (err) return res.status(500).send(err);
        db.collection('products').deleteOne({
            _id: new ObjectId(id)
        }, (err, result) =>{
            if(err) return res.status(500).send(err);
            return res.send(result);
        });
    });
});

module.exports = router
