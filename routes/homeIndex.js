const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the home navigation page
router.get('/', (req, res) => {
    console.log("GET request to '/' route received.");
    res.sendFile(path.join(__dirname, '../homePage/home.html')); // Serve the home navigation page
});

module.exports = router;
