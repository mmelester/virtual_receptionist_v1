
export async function handleUserFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("handleUserFormSubmission Called!");
    let errors = []; // Initialize an array to store validation errors

    // Retrieve the user Id and editFlag from localStorage
    const Id = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');

    // Collect form data
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value.trim();

    console.log("user info ", username, password, email, role);

    // Validate user form inputs
    if (!username) {
        errors.push('Username is required.');
    } else if (username.length < 3 || username.length > 12) {
        errors.push('Username must be between 3 and 12 characters.');
    }

    if (!password) {
        errors.push('Password is required.');
    } else if (password.length < 8 || password.length > 21) {
        errors.push('Password must be between 8 and 21 characters.');
    }

    if (!email) {
        errors.push('Email is required.');
    } else if (!email.includes('@')) {
        errors.push('Email must contain "@" character.');
    }

    if (!role) {
        errors.push('User role is required.');
    }

    // If there are errors, send them to the server and stop further execution
    if (errors.length > 0) {
         
        console.log("Errors present");
        // Post errors to server
        try {
            await fetch('/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ errors }),
            });
            window.location.reload(); // Force a page refresh to display flash errors
            return; // Stop further execution
        } catch (error) {
            console.error('Error sending errors:', error);
        }
    }

    // Prepare data for the server
    const userData = {
        username: username,
        password: password,
        email: email,
        role: role
    };

    console.log("userData", userData);

    try {
        const url = flag === 'c' ? '/admin/user/add' : `/admin/user/edit/${Id}`;
        const method = flag === 'c' ? 'POST' : 'PUT';

        console.log("url = ", url, " method = ", method);

        // Make a POST or PUT request to the server to save/update the building data
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });


        const result = await response.json();

        if (!response.ok) {
            alert(result.message || 'An error occurred.');
            console.log(!response);
            return;
        }
        location.reload(); // Refresh the page
        alert(result.message || 'Operation successful!');

    } catch (error) {
        console.error('Error submitting form:', error);
        const errorContainer = document.querySelector('.alert-danger ul');
        if (errorContainer) {
            errorContainer.innerHTML = ''; // Clear previous errors
            const li = document.createElement('li');
            li.textContent = 'An unexpected error occurred. Please try again.';
            errorContainer.appendChild(li);
        }
    }
}

