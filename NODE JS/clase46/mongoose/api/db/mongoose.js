const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/newecommerce'

mongoose.connect(url, {
    useNewUrlParser: true,
});
