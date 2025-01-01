// Main Page Functionality
const designButton = document.getElementById('designButton');
const messageElement = document.getElementById('message');

if (designButton) {
    designButton.addEventListener('click', function() {
        if (messageElement) {
            messageElement.innerText = 'Design your shirt by choosing styles and colors!';
        }
    });
}

// Login Page Functionality
const loginForm = document.getElementById('loginForm');
const loginMessageElement = document.getElementById('loginMessage');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (in a real app, you'd check against a database)
        if (username === 'user' && password === 'pass') {
            if (loginMessageElement) {
                loginMessageElement.innerText = 'Login successful!';
            }
            // Redirect to main page or dashboard
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect to main page after 2 seconds
            }, 2000);
        } else {
            if (loginMessageElement) {
                loginMessageElement.innerText = 'Invalid username or password. Please try again.';
            }
        }
    });
}
