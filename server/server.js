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
    price: Number,
    sale: Boolean,
    oldPrice: Number,
    description: String
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});