import { previewFile } from './drag-n-drop'

document.querySelectorAll('.editBuilding').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const Id = event.target.dataset.id;

        if (confirm('Do you want to edit the building information?')) {
            const editBuildingButton = document.getElementsByClassName('edit-building-btn')[0];

            const buildingForm = document.getElementById('buildingForm');
            const deleteIcon = document.getElementsByClassName('delete-building-image-btn')[0];

            // Get the delete button parent element
            if (deleteIcon) {
                const parent = deleteIcon.parentElement;
                if (parent) {
                    // Replace the current content with a new element
                    parent.innerHTML = `<i class="delete-building-image-btn fa fa-pencil-square-o" aria-hidden="true"></i>`;
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
                        img.src = image; 
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
