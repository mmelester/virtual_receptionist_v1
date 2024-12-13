document.querySelectorAll('.editCompany').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.dataset.id;

        if (confirm('Do you want to edit this company information?')) {
            const createCompanyButton = document.getElementById('create-company-btn');
            const addCompanySection = document.getElementById('add-company-section');
            const companyForm = document.getElementById('companyForm');
            const formHeading = document.getElementById('form-heading');

            formHeading.innerHTML = '<h2>Edit Company Information</h2>';

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
                        img.onload = function () {
                            const canvas = document.getElementById('canvas');
                            const ctx = canvas.getContext('2d');

                            // Set canvas dimensions based on image
                            canvas.width = img.width;
                            canvas.height = img.height;

                            // Draw the image onto the canvas
                            ctx.drawImage(img, 0, 0, img.width, img.height);

                            // Unhide the canvas and hide the form container
                            document.querySelector('.canvas-container').classList.remove('hidden');
                            document.querySelector('.form-container').classList.add('hidden');
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
