// script.js

// Add event listeners to all buttons in the gallery
document.querySelectorAll('.signin-button').forEach(button => {
    button.addEventListener('click', function() {
        const shirtType = this.innerText; // Get the text of the button
        alert(`You selected: ${shirtType}`); // Display an alert with the shirt type
    });
});