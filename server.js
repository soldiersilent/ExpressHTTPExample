const express = require('express');
const app = express();
const path = require('path');

// Import the different route files
const basicCRUDRoutes = require('./routes/basicCRUDindex');  // Routes for basic CRUD operations
const homeRoutes = require('./routes/homeIndex');            // Routes for home page
const queryRoutes = require('./routes/queryindex');          // Routes for query parameters

// Middleware to parse JSON bodies
app.use(express.json());

// Handles URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory (CSS, JS, etc.)
app.use(express.static('public'));

// Serve the home page routes
app.use('/', homeRoutes);

// Serve the basic CRUD routes under the /basicCRUD path
app.use('/basicCRUD', basicCRUDRoutes);

// Serve the query parameter routes under the /queryParameters path
app.use('/queryParameters', queryRoutes);

// Error handling middleware (global)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Default port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
