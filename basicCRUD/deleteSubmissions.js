// Function to handle deleting a submission by index
async function deleteSubmission(index) {
    try {
        // Send DELETE request to the server
        const response = await fetch(`delete/${index}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Submission deleted successfully');
            loadSubmissions(); // Reload the table after deletion
        } else {
            console.error('Error deleting submission:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Attach delete button functionality dynamically in loadSubmissions
function addDeleteButton(row, index) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteSubmission(index);
    row.appendChild(deleteButton); // Add the delete button to the row
}
