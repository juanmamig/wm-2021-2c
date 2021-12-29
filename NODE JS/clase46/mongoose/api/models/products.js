const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Schema.Types.Number.cast(false);
mongoose.Schema.Types.String.cast(false);

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;