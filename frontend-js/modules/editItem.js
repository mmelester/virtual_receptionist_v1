import { previewFile } from './drag-n-drop'

document.querySelectorAll('.editCompany').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.dataset.id;

        if (confirm('Do you want to edit this company information?')) {
            const createCompanyButton = document.getElementsByClassName('create-company-btn')[0];
            const addCompanySection = document.getElementById('add-company-section');
            const companyForm = document.getElementById('companyForm');
            const formHeading = document.getElementById('form-heading');
            // const deleteIcon = document.getElementById('delete-icon')
            const deleteIcon = document.getElementsByClassName('delete-image-btn')[0];

            // Store the companyId and editFlag in localStorage
            localStorage.setItem('editCompanyId', companyId);
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

            try {
                const response = await fetch(`/admin/companies/edit/${companyId}`);
                const result = await response.json();

                if (result.success) {
                    const { name, intro, image } = result.data;
                    companyForm.elements['companyName'].value = name;
                    companyForm.elements['introText'].value = intro;

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
                    alert(result.message || 'Failed to fetch company information.');
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});