const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 1234;

// Ensure the 'public' directory exists
if (!fs.existsSync(path.join(__dirname, 'public'))) {
    fs.mkdirSync(path.join(__dirname, 'public'));
}


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML Pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public/about.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'public/products.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public/contact.html')));
app.get('/SmartHome', (req, res) => res.sendFile(path.join(__dirname, 'public/SmartHome.html')));
app.get('/SmartLock', (req, res) => res.sendFile(path.join(__dirname, 'public/SmartLock.html')));
app.get('/productsMore', (req, res) => res.sendFile(path.join(__dirname, 'public/productsMore.html')));


// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));