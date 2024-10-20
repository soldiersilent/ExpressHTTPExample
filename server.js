const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files for basicCRUD and queryParameters
app.use('/basicCRUD', express.static(path.join(__dirname, 'basicCRUD')));
app.use('/queryParameters', express.static(path.join(__dirname, 'queryParameters')));
app.use('/customResponses', express.static(path.join(__dirname, 'customResponses')));

// Import the different route files
const homeRoutes = require('./routes/homeIndex');
const basicCRUDRoutes = require('./routes/basicCRUDIndex');
const queryRoutes = require('./routes/queryIndex');
const customResponseRoutes = require('./routes/customResponseIndex');


// Serve the different page routes
app.use('/', homeRoutes);
app.use('/basicCRUD', basicCRUDRoutes);
app.use('/queryParameters', queryRoutes);
app.use('/customResponses', customResponseRoutes);

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
