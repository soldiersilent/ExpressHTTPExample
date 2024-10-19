// Function to handle editing a submission by index
async function editSubmission(index, submissionData) {
    try {
        // Send PUT request to the server
        const response = await fetch(`/edit/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submissionData)
        });

        if (response.ok) {
            console.log('Submission updated successfully');
            loadSubmissions(); // Reload the table after update
        } else {
            console.error('Error updating submission:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to convert table row into an editable form
function enableEdit(row, index) {
    // Get current data from the row
    const cells = row.children;
    const name = cells[1].textContent;
    const email = cells[2].textContent;
    const dob = cells[3].textContent;
    const age = cells[4].textContent;
    const height = cells[5].textContent;

    // Replace the row with inputs to allow editing
    row.innerHTML = `
        <td>${index + 1}</td>
        <td><input type="text" value="${name}" id="edit-name-${index}"></td>
        <td><input type="email" value="${email}" id="edit-email-${index}"></td>
        <td><input type="date" value="${dob}" id="edit-dob-${index}"></td>
        <td><input type="number" value="${age}" id="edit-age-${index}"></td>
        <td><input type="number" step="0.01" value="${height}" id="edit-height-${index}"></td>
        <td><button onclick="saveEdit(${index})">Save</button></td>
    `;
}

// Function to save edited data and send it to the server
function saveEdit(index) {
    const editedData = {
        name: document.getElementById(`edit-name-${index}`).value,
        email: document.getElementById(`edit-email-${index}`).value,
        dob: document.getElementById(`edit-dob-${index}`).value,
        age: document.getElementById(`edit-age-${index}`).value,
        height: document.getElementById(`edit-height-${index}`).value
    };

    // Call editSubmission to update the submission
    editSubmission(index, editedData);
}
