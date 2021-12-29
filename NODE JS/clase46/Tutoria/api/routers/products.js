const express = require('express')
const { ObjectId } = require('mongodb')
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

    const { location } = req.body;
    const urlLocation = location.match('src\s*=\s*"(.+?)"');
    
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

router.get('/product/:id', (req, res) => {
    const { id } = req.params;
    getClient((err, db) => {
        db.collection('products').findOne({
            _id: new ObjectId(id)
        }, (err, result) => {
            if(err) return res.send(err)
            return res.send(result)
        })
    })
});

router.patch('/product/:id', (req, res) => {
    const { id } = req.params;
    getClient((err, db) => {
        db.collection('products').updateOne({
            _id: new ObjectId(id)
        },{
            $set: {
                price: 10,
            }
        }, (err, result) => {
            if(err) return res.send(err)
            return res.send(result)
        })
    })
});

router.delete('/product/:id', (req, res) => {
    const { id } = req.params;
    getClient((err, db) => {
        db.collection('products').deleteOne({
            _id: new ObjectId(id)
        }, (err, result) => {
            if(err) return res.send(err)
            return res.send(result)
        })
    })
});


module.exports = router