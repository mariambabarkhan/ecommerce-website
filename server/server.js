require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
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

app.get('/collections/:category', async (req, res) => {
    if(req.params.category === 'all') {
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
