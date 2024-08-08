const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/blissfulDB')
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
    });

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    hoverImage: String,
    price: String,
    sale: Boolean,
    oldPrice: String,
    description: String,
    size: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/', (req, res) => {
    res.send('Server is running, shukkar');
});

app.get('/collections/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/collections/all/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/products/vitamin-c', async (req, res) => {
    try {
        const product = await Product.findOne({ name: 'Brightening Serum - Vitamin C' }); // Adjust the query to match your product
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
