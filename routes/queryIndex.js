const express = require('express');
const path = require('path');
const router = express.Router();

// Pre-populated in-memory data (similar to submissions in basicCRUD)
const people = [
    { name: 'Alice', email: 'alice@example.com', dob: '1990-05-12', age: 33, height: 1.65 },
    { name: 'Bob', email: 'bob@example.com', dob: '1988-11-23', age: 35, height: 1.75 },
    { name: 'Charlie', email: 'charlie@example.com', dob: '1995-08-17', age: 28, height: 1.80 },
    { name: 'Diana', email: 'diana@example.com', dob: '1992-03-09', age: 31, height: 1.60 },
    { name: 'Eve', email: 'eve@example.com', dob: '1998-07-30', age: 26, height: 1.70 }
];

// Route to serve the query page (HTML)
router.get('/', (req, res) => {
    console.log('Serving the query parameters page.');
    res.sendFile(path.join(__dirname, '../queryParameters/queryPage.html')); // Serve the query page
});

// Route to handle queries based on 'name', 'age', or 'height' (OR logic)
router.get('/filter', (req, res) => {
    console.log('GET request to /queryParameters/filter received');
    console.log('Query parameters:', req.query);

    const { name, age, height } = req.query;

    let filteredPeople = people;

    // Implement OR logic: filter if any of the conditions match
    filteredPeople = filteredPeople.filter(person => {
        const matchesName = name ? person.name.toLowerCase() === name.toLowerCase() : false;
        const matchesAge = age ? person.age === parseInt(age) : false;
        const matchesHeight = height ? person.height === parseFloat(height) : false;

        // OR logic: return true if any of the conditions match
        return matchesName || matchesAge || matchesHeight;
    });

    res.json(filteredPeople); // Return the filtered data as JSON
});

module.exports = router;
