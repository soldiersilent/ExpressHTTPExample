const express = require('express');
const path = require('path');
const router = express.Router();

// Define routes here
// Example:
router.get('/', (req, res) => {
    console.log("GET request to '/queryParameters/' route received.");
        res.sendFile(path.join(__dirname, '../queryParameters/queryPage.html')); // Serve the home navigation page
    });

module.exports = router; // This is critical!
