document.addEventListener('DOMContentLoaded', function() {
    // Get the button and section elements
    const createUserButton = document.getElementById('create-user-btn');
    const addUserSection = document.getElementById('add-user-section');

    localStorage.setItem('editFlag', 'c');

    // Add click event listener to the button
    createUserButton.addEventListener('click', function () {
        // Hide the button
        createUserButton.classList.add('d-none');
        // Set heading
        addUserSection.classList.remove('d-none');
    });
});

