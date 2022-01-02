const express = require('express')
const Product = require('../models/products');
// const { ObjectId } = require('mongodb')
const router = express.Router()
// const getClient = require('../db/mongodb')


// router.get('/products', (req, res) => {
//     getClient((err, db) => {
//         if(err) return res.send(err)
//             db.collection('products').find().toArray((err, result) => {
//         if(err) return res.send(err)
//             return res.send(result)
//         }) 
//     })
// })

router.post('/product', (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(() => {
            res.send(product);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

// router.get('/product/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         db.collection('products').findOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// });

// router.patch('/product/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         db.collection('products').updateOne({
//             _id: new ObjectId(id)
//         },{
//             $set: {
//                 price: 10,
//             }
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// });

// router.delete('/product/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         db.collection('products').deleteOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// });


module.exports = router