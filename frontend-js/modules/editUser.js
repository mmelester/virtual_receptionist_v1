
/*
 * This script enables editing of user information in the admin interface:
 *
 * - Attaches click event listeners to all elements with the "editUser" class.
 * - When an edit icon is clicked:
 *      • Prompts the user for confirmation to edit the user's details.
 *      • Retrieves the user ID from the clicked element's data attributes.
 *      • Stores the user ID and an edit flag ('e') in localStorage.
 *      • Updates the UI by hiding the "create user" button and showing the "add user" section.
 *      • Changes the save button text to "Update User" to indicate edit mode.
 * - Fetches the user's current data from the server using the user ID.
 * - On a successful response, populates the form fields (username, password, email, role) with the retrieved data.
 * - Handles errors by alerting the user and logging the error details to the console.
 */
document.querySelectorAll('.editUser').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const Id = event.target.dataset.id;

        if (confirm('Do you want to edit this user information?')) {
            const createUserButton = document.getElementById('create-user-btn'); 
            const saveUserButton = document.getElementById('save-user-btn');
            const addUserSection = document.getElementById('add-user-section');
            const userForm = document.getElementById('userForm');

            // Store the Id and editFlag in localStorage
            localStorage.setItem('editId', Id);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            saveUserButton.innerText = 'Update User'

            addUserSection.classList.remove('d-none');
            createUserButton.classList.add('d-none');

            // Retrieve building record from database
            try {
                const response = await fetch(`/admin/user/edit/${Id}`);

                console.log("editUser.js response = ", response);

                const result = await response.json();

                console.log("result = ", result);

                if (result.success) {
                    const { username, password, email, role } = result.data;
                    userForm.elements['username'].value = username;
                    userForm.elements['password'].value = password;
                    userForm.elements['email'].value = email;
                    userForm.elements['role'].value = role;

                } else {
                    alert(result.message || 'Failed to fetch user information.');
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});
