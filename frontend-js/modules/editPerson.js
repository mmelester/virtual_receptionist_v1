import { previewFile } from './drag-n-drop'

document.querySelectorAll('.editPerson').forEach((icon) => {
    icon.addEventListener('click', async (event) => {

        const personId = event.currentTarget.dataset.id;
        const companyId = event.currentTarget.dataset.companyId;
        const editRoute = event.currentTarget.dataset.route;

        if (confirm("Do you want to edit this person's information?")) {
            const createPersonButton = document.getElementsByClassName('create-person-btn')[0];
            const addPersonSection = document.getElementById('add-person-section');
            const personForm = document.getElementById('personForm');
            const formHeading = document.getElementById('person-form-heading');
            const deleteIcon = document.getElementsByClassName('delete-image-btn')[0];
            
            // Store the Ids and editFlag in localStorage
            localStorage.setItem('editId', companyId);
            localStorage.setItem('personId', personId);
            localStorage.setItem('editFlag', 'e');
            
            // Modify form for edit
            formHeading.innerHTML = "<h2>Edit Staff Member's Information</h2>";
            // Get the delete button parent element
            if (deleteIcon) {
                const parent = deleteIcon.parentElement;
                if (parent) {
                    // Replace the current content with a new element
                    parent.innerHTML = `<i class="delete-image-btn fa fa-pencil-square-o" aria-hidden="true"></i>`;
                }
            }

            addPersonSection.classList.remove('d-none');
            createPersonButton.classList.add('d-none');

            try {
                const response = await fetch(`${editRoute}/${companyId}/people/edit/${personId}`);
                const result = await response.json();

                console.log("Full result: ", result);
                console.log("result.data: ", result.data);
                if (result.success) {
                    console.log("Keys in result.data:", Object.keys(result.data));
                }

                if (result.success) {

                    const name = result.data.name;
                    const title = result.data.title;
                    const reply = result.data.reply;
                    const mobile = result.data.mobile;
                    const email = result.data.email;
                    const outlet = result.data.outlet;
                    const image = result.data.image;
                    
                    personForm.elements['personName'].value = name;
                    personForm.elements['personTitle'].value = title;
                    personForm.elements['replyText'].value = reply;
                    personForm.elements['mobile'].value = mobile;
                    personForm.elements['email'].value = email;
                    personForm.elements['outlet'].value = outlet;

                    // Preload image into the canvas
                    if (image) {
                        const img = new Image();
                        img.src = image; // Assuming `image` contains the Base64 or URL
                        img.onload = async function () {
                            // Fetch the image data
                            const response = await fetch(img.src);
                            const blob = await response.blob(); // Convert to Blob
                        
                            // Create a File object from the Blob if needed
                            const file = new File([blob], "uploadedImage.jpg", { type: blob.type });
                        
                            // Call the previewFile function with the File
                            previewFile(file);
                        };
                    }
                } else {
                    alert(result.message || "Failed to fetch person's information.");
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});
