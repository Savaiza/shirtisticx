document.getElementById('submitButton').addEventListener('click', submitQuery);

function submitQuery() {
    const query = document.getElementById('queryInput').value;
    if (query) {
        alert("Thanks for your feedback!"); // Show the thank you message
        document.getElementById('queryInput').value = ''; // Clear the input field
    } else {
        alert("Please enter a query.");
    }
}