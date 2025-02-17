/*
 * This script manages the UI for adding a new user:
 * - Waits for the DOM to fully load.
 * - Retrieves the "create user" button and the "add user" section.
 * - Sets an 'editFlag' in localStorage to 'c', indicating a create mode.
 * - Adds a click event listener to the button that:
 *     • Hides the button by adding the 'd-none' class.
 *     • Reveals the add user section by removing the 'd-none' class.
 */

document.addEventListener('DOMContentLoaded', function () {
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

