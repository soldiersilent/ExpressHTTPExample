const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files for basicCRUD and queryParameters
app.use('/basicCRUD', express.static(path.join(__dirname, 'basicCRUD')));
app.use('/queryParameters', express.static(path.join(__dirname, 'queryParameters')));

// Import the different route files
const basicCRUDRoutes = require('./routes/basicCRUDIndex');
const homeRoutes = require('./routes/homeIndex');
const queryRoutes = require('./routes/queryIndex');

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
