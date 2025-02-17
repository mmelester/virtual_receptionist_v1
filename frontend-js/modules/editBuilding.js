/*
 * This script enables the editing of building information in the admin interface.
 *
 * Key functionalities:
 *  - Listens for click events on elements with the class "editBuilding".
 *  - When an edit icon is clicked, prompts the user to confirm if they want to edit the building info.
 *  - Upon confirmation:
 *      • Retrieves necessary DOM elements (e.g., edit form, buttons, heading, delete icon).
 *      • Stores the selected building's ID and sets an "edit" flag in localStorage.
 *      • Updates the UI by:
 *            - Changing the form heading to "Edit Building Information".
 *            - Replacing the delete icon with an edit icon.
 *            - Toggling visibility: displaying the edit section and hiding the create button.
 *      • Fetches the building record from the server.
 *      • If successful:
 *            - Populates the form fields (name and intro) with the retrieved data.
 *            - If an image exists, preloads it and processes it via the previewFile function.
 *  - Handles errors by logging messages and alerting the user as needed.
 */

import { previewFile } from './drag-n-drop'

document.querySelectorAll('.editBuilding').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const Id = event.target.dataset.id;

        if (confirm('Do you want to edit the building information?')) {
            const createBuildingButton = document.getElementsByClassName('create-building-btn')[0];
            const addBuildingSection = document.getElementById('add-building-section');
            const buildingForm = document.getElementById('buildingForm');
            const formHeading = document.getElementById('form-heading');
            const deleteIcon = document.getElementsByClassName('delete-image-btn')[0];

            // Store the Id and editFlag in localStorage
            localStorage.setItem('editId', Id);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            formHeading.innerHTML = '<h2>Edit Building Information</h2>';
            // Get the delete button parent element
            if (deleteIcon) {
                const parent = deleteIcon.parentElement;
                if (parent) {
                    // Replace the current content with a new element
                    parent.innerHTML = `<i class="delete-image-btn fa fa-pencil-square-o" aria-hidden="true"></i>`;
                }
            }

            addBuildingSection.classList.remove('d-none');
            createBuildingButton.classList.add('d-none');

            // Retrieve building record from database
            try {
                const response = await fetch(`/admin/building`);

                console.log("editBuilding.js response = ", response);

                const result = await response.json();

                console.log("result = ", result);

                if (result.success) {
                    const { name, intro, image } = result.data;
                    buildingForm.elements['buildingName'].value = name;
                    buildingForm.elements['buildingIntroText'].value = intro;
  
                    // Preload image into the canvas
                    if (image) {
                     
                        const img = new Image();
                        img.src = image; // Assuming `image` contains the Base64 or URL

                        img.onload = async function () {
                            try {
                                // Fetch the image data
                                const response = await fetch(img.src);
                                
                                // Check if the response is successful
                                if (!response.ok) {
                                    throw new Error(`Failed to fetch image. Status: ${response.status}`);
                                }
                        
                                const blob = await response.blob(); // Convert to Blob
                        
                                // Create a File object from the Blob if needed
                                const file = new File([blob], "uploadedImage.jpg", { type: blob.type });
                        
                                // Call the previewFile function with the File
                                previewFile(file);
                            } catch (error) {
                                // Handle the error (e.g., log it or show an alert)
                                console.error('Error loading image:', error.message);
                                alert('There was an error processing the image. Please try again.');
                            }
                        };
                        
                    }
                } else {
                    alert(result.message || 'Failed to fetch building information.');
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});
