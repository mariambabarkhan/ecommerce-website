const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    hoverImage: String,
    price: String,
    sale: Boolean,
    oldPrice: String,
    description: String,
    size: String,
    categories: [String],
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;