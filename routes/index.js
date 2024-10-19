const express = require('express');
const path = require('path'); // For resolving file paths
const router = express.Router();

// In-memory storage for submitted data
const submissions = [];

// Serve the HTML form on the root URL
router.get('/', (req, res) => {
    console.log("GET request to '/' route received.");
    res.sendFile(path.join(__dirname, '../public/index.html')); // Serve the form page
});

// API to fetch all submissions (JSON format)
router.get('/submissions', (req, res) => {
    console.log("Current submissions:", submissions);
    res.json(submissions); // Return submissions as JSON
});

// POST route to handle form submission
router.post('/submit', (req, res) => {
    const { name, email, dob, age, height } = req.body;

    // Validate form data
    if (!Number.isInteger(Number(age))) {
        console.log("Error: Age is not a valid integer.");
        return res.status(400).send('Invalid age. Age must be an integer.');
    }

    if (isNaN(parseFloat(height))) {
        console.log("Error: Height is not a valid float.");
        return res.status(400).send('Invalid height. Height must be a float.');
    }

    // Log the submission and store it
    const logMessage = `POST request received with data: ${JSON.stringify(req.body)}`;
    console.log(logMessage);

    submissions.push({ name, email, dob, age, height });
    console.log("Updated submissions:", submissions);

    // Send success status to avoid page reload (handled via AJAX)
    res.status(200).json({ message: 'Submission successful' });
});

// PUT route to handle editing a submission by index
router.put('/edit/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { name, email, dob, age, height } = req.body;

    if (isNaN(index) || index < 0 || index >= submissions.length) {
        return res.status(400).send('Invalid index.');
    }

    // Validate form data
    if (!Number.isInteger(Number(age))) {
        console.log("Error: Age is not a valid integer.");
        return res.status(400).send('Invalid age. Age must be an integer.');
    }

    if (isNaN(parseFloat(height))) {
        console.log("Error: Height is not a valid float.");
        return res.status(400).send('Invalid height. Height must be a float.');
    }

    // Update the submission
    submissions[index] = { name, email, dob, age, height };
    console.log(`Submission at index ${index} updated:`, submissions[index]);

    res.status(200).json({ message: 'Submission updated', updatedSubmission: submissions[index] });
});

// DELETE route to handle removing a submission by index
router.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index); // Get the index from the URL
    if (isNaN(index) || index < 0 || index >= submissions.length) {
        return res.status(400).send('Invalid index.');
    }

    // Remove the submission at the given index
    const removedSubmission = submissions.splice(index, 1); // Remove the item

    console.log(`Deleted submission:`, removedSubmission);
    res.status(200).json({ message: 'Submission deleted', deletedSubmission: removedSubmission });
});

module.exports = router;
