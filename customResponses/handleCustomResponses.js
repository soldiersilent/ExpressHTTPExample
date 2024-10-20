// Function to handle form submission and make a request to the server
document.getElementById('response-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    console.log("Form submitted"); // Debugging: check if the event listener is working

    const selectedStatus = document.getElementById('status').value;
    console.log("Selected status:", selectedStatus); // Debugging: check selected status

    try {
        const response = await fetch(`/customResponses/${selectedStatus}`, {
            method: 'GET'
        });

        const result = await response.json();
        console.log("Server response:", result); // Debugging: check server response

        // Display the status code and the message from the server
        const output = `Status Code: ${response.status}\nMessage: ${result.message}`;
        document.getElementById('response-output').textContent = output;
    } catch (error) {
        console.error('Error handling request:', error);
    }
});
