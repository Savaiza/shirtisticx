document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if fields are not empty
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save the information (in this case, just displaying it)
    // In a real application, you would send this data to a server
    document.getElementById('welcome-message').innerText = `Welcome, ${username}! Your email is ${email}.`;

    // Hide the sign-up form and show the main page
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
});