document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login .input-group');
    const signupForm = document.querySelector('#register .input-group');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors(loginForm);
        if (validateLogin()) {
            alert('Login successful!');
            window.location.href = 'index.html'; 
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors(signupForm);
        if (validateSignup()) {
            alert('Signup successful!');
            window.location.href = 'index.html'; 
        }
    });

    function validateLogin() {
        const email = document.getElementById('logEmail').value;
        const password = document.getElementById('logPassword').value;
        let isValid = true;

        if (!validateEmail(email)) {
            showError('logEmail', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePassword(password)) {
            showError('logPassword', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        return isValid;
    }

    function validateSignup() {
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        let isValid = true;

        if (username.length < 3) {
            showError('regUsername', 'Username must be at least 3 characters long.');
            isValid = false;
        }

        if (!validateEmail(email)) {
            showError('regEmail', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePassword(password)) {
            showError('regPassword', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(inputId, message) {
        const inputField = document.getElementById(inputId).parentElement;
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        inputField.appendChild(errorElement);
    }

    function clearErrors(form) {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }
});
