/*
 * This script enables editing of company information in the admin interface:
 *
 * - It attaches click event listeners to all elements with the class "editCompany".
 *
 * - When an edit icon is clicked:
 *     • The user is prompted to confirm whether they want to edit the company information.
 *     • If confirmed, the script retrieves key DOM elements (e.g., the create company button, the company form, the 
 *       editing section, and the delete icon).
 *     • It stores the company ID and an edit flag ('e') in localStorage.
 *     • The form heading is updated to "Edit Company Information" and the delete icon is replaced with an edit icon.
 *     • The company editing section is displayed while hiding the create company button.
 *
 * - The script then fetches the company record from the server using the company ID:
 *     • If the fetch is successful, it populates the form fields (company name and intro text) with the retrieved 
 *       data.
 *     • If an image is provided, it creates an Image object, loads it, converts it to a File object, and calls 
 *       previewFile() 
 *       to display the image preview and initialize cropping functionality.
 *
 * - Errors during the fetch or image processing are caught and handled by alerting the user and logging error 
 *   details.
 */
import { previewFile } from './drag-n-drop'

document.querySelectorAll('.editCompany').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const Id = event.target.dataset.id;

        if (confirm('Do you want to edit this company information?')) {
            const createCompanyButton = document.getElementsByClassName('create-company-btn')[0];
            const addCompanySection = document.getElementById('add-company-section');
            const companyForm = document.getElementById('companyForm');
            const formHeading = document.getElementById('form-heading');
            const deleteIcon = document.getElementsByClassName('delete-image-btn')[0];

            // Store the Id and editFlag in localStorage
            localStorage.setItem('editId', Id);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            formHeading.innerHTML = '<h2>Edit Company Information</h2>';
            // Get the delete button parent element
            if (deleteIcon) {
                const parent = deleteIcon.parentElement;
                if (parent) {
                    // Replace the current content with a new element
                    parent.innerHTML = `<i class="delete-image-btn fa fa-pencil-square-o" aria-hidden="true"></i>`;
                }
            }

            addCompanySection.classList.remove('d-none');
            createCompanyButton.classList.add('d-none');

            // Retrieve company record from database
            try {
                const response = await fetch(`/admin/companies/edit/${Id}`);

                console.log("editCompany.js response = ", response);

                const result = await response.json();

                console.log("result = ", result);

                if (result.success) {
                    const { name, intro, image } = result.data;
                    companyForm.elements['companyName'].value = name;
                    companyForm.elements['introText'].value = intro;

                    // Preload image into the canvas
                    if (image) {
                        const img = new Image();
                        img.src = image; // Assuming `image` contains the Base64 or URL
                        // img.onload = async function () {
                        //     // Fetch the image data
                        //     const response = await fetch(img.src);
                        //     const blob = await response.blob(); // Convert to Blob
                        
                        //     // Create a File object from the Blob if needed
                        //     const file = new File([blob], "uploadedImage.jpg", { type: blob.type });
                        
                        //     // Call the previewFile function with the File
                        //     previewFile(file);
                        // };
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
                    alert(result.message || 'Failed to fetch company information.');
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});
