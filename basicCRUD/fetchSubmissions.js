// Function to fetch and render submissions in the table
async function loadSubmissions() {
    try {
        const response = await fetch('submissions');  // Fetch submissions from the server
        const submissions = await response.json(); // Parse the JSON response

        const tableBody = document.getElementById('data-table');
        tableBody.innerHTML = ''; // Clear existing rows

        console.log('List of submissions:', submissions); // Log submissions for debugging

        // Loop over submissions and create rows for each
        submissions.forEach((submission, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${submission.name}</td>
                <td>${submission.email}</td>
                <td>${submission.dob}</td>
                <td>${submission.age}</td>
                <td>${submission.height}</td>
            `;

            // Add the edit button for this row
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => enableEdit(row, index); // Enable editing on click
            row.appendChild(editButton);

            // Add the delete button for this row
            addDeleteButton(row, index); // Reuse the delete button function

            tableBody.appendChild(row); // Add row to the table
        });
    } catch (error) {
        console.error('Error loading submissions:', error); // Handle errors
    }
}
// Function to handle form submission with AJAX
async function submitForm(event) {
    event.preventDefault(); // Prevent default form submission (page reload)

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
    };

    try {
        // Send form data via POST request
        const response = await fetch('/basicCRUD/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            loadSubmissions(); // Reload table after successful submission
        } else {
            console.error('Error submitting form:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error); // Handle errors
    }
}

// Attach submitForm to form submission event
document.getElementById('submission-form').addEventListener('submit', submitForm);

// Load submissions when the page loads
window.onload = loadSubmissions;
