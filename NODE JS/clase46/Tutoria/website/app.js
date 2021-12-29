const express = require('express')
const path = require('path')
const port = 3000
const app = express()

// Custom Modules
const productsModule = require('./utils/products');

const viewsURL = path.join(__dirname, 'views')

app.set('views', viewsURL)
app.set('view engine', 'ejs')

const publicURL = path.join(__dirname, 'public')

app.use(express.static(publicURL))

app.get('', (req, res) => {
    productsModule.getAllProducts((err, products) => {
        if (err) return res.status(500).send('Some error ocurred');
        if(products.length === 0) return res.status(500).send('Some Error Ocurred');
        const parsedProducts = JSON.parse(products);
        return res.render('pages/index', {products: parsedProducts});
    });
});

app.get('/product/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    productsModule.getSingleProduct(id, (err, product) => {
        if (err) return res.status(404).send('Some error ocurred');
        const parsedProduct = JSON.parse(product);
        return res.render('pages/product', {product: parsedProduct});
    });
});

app.get('/agregar', (req, res) => {
    res.render('pages/agregar')
})


app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})

