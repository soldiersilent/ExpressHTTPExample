const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware to parse JSON bodies
app.use(express.json());

//Handles URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use routes defined in routes/index.js
app.use('/', routes);

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
