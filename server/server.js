require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const emailValidator = require('email-validator');
const dns = require('dns');
const Product = require('./models/Product');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
    });

app.get('/', (req, res) => {
    res.send('Server is running');
});

const validateDomain = (email) => {
    return new Promise((resolve, reject) => {
        const domain = email.split('@')[1];
        dns.resolveMx(domain, (err, addresses) => {
            if (err || addresses.length === 0) {
                reject('Invalid email domain');
            } else {
                resolve(true);
            }
        });
    });
};

app.post('/api/place-order', async (req, res) => {
    const { cart } = req.body;
    try {
        for (const item of cart) {
            const product = await Product.findById(item.id);
            if (product) {
                product.quantity -= item.quantity;
                await product.save();
            } else {
                return res.status(404).json({ message: `Product with ID ${item.id} not found` });
            }
        }

        res.status(200).json({ message: 'Order placed successfully!' });
    } catch (error) {
        console.error('Error updating product quantities:', error);
        res.status(500).json({ message: 'Failed to process order. Please try again.' });
    }
});

app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!emailValidator.validate(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        await validateDomain(email);
        const filePath = path.join(__dirname, 'Subscribers.txt');
        fs.appendFile(filePath, `${email}\n`, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save the email' });
            }
            return res.status(200).json({ message: 'Subscription successful' });
        });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

app.get('/api/search', async (req, res) => {
    const query = req.query.query;
    try {
        const results = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { categories: { $regex: query, $options: 'i' } }
            ]
        }).limit(10);
        res.json(results);
    } catch (error) {
        console.error('Error occurred during search:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/collections/:category', async (req, res) => {
    if (req.params.category === 'all') {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    else {
        try {
            const category = req.params.category;
            const products = await Product.find({
                categories: { $regex: category, $options: 'i' }
            });
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
});

app.get('/latest-products', async (req, res) => {
        try {
            const category = "Latest";
            const products = await Product.find({
                categories: { $regex: category, $options: 'i' }
            });
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

app.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        const filePath = path.join(__dirname, 'CustomerCare.txt');
        const data = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n`;
        fs.appendFile(filePath, data, (err) => {
            if (err) {
                console.error('Error saving contact form data:', err);
            }
        });
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Error submitting contact form' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
