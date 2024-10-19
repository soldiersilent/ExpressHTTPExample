// Function to fetch and render filtered data
async function loadFilteredData(queryParams) {
    try {
        const response = await fetch(`/queryParameters/filter?${queryParams}`);
        const data = await response.json(); // Parse the JSON response

        const tableBody = document.getElementById('data-table');
        tableBody.innerHTML = ''; // Clear any existing rows

        if (data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5">No results found</td></tr>';
            return;
        }

        // Loop over the filtered data and create table rows
        data.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.dob}</td>
                <td>${person.age}</td>
                <td>${person.height}</td>
            `;
            tableBody.appendChild(row); // Add row to table
        });
    } catch (error) {
        console.error('Error loading filtered data:', error);
    }
}

// Handle form submission via JavaScript
document.getElementById('query-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const params = new URLSearchParams(new FormData(this)).toString(); // Get form data as query string
    
    // Update the URL in the browser's address bar
    const newUrl = `${window.location.pathname}?${params}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    loadFilteredData(params); // Load and render filtered data
});
