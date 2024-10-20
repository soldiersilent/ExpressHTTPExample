const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the query page (HTML)
router.get('/', (req, res) => {
    console.log('Serving the /customResponses page.');
    res.sendFile(path.join(__dirname, '../customResponses/customResponses.html')); // Serve the query page
});

// Route to handle 'success' response (201 Created)
router.get('/success', (req, res) => {
    res.status(201).json({ message: 'Resource successfully created!' });
});

// Route to handle 'validation-error' (400 Bad Request)
router.get('/validation-error', (req, res) => {
    res.status(400).json({ message: 'Validation failed. Please check your input.' });
});

// Route to handle 'server-error' (500 Internal Server Error)
router.get('/server-error', (req, res) => {
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
});

module.exports = router;
