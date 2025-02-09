
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
