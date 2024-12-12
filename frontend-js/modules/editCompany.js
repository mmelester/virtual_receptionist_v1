document.querySelectorAll('.editCompany').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.dataset.id;

        if (confirm('Do you want to edit this company information?')) {
            const createCompanyButton = document.getElementById('create-company-btn');
            const addCompanySection = document.getElementById('add-company-section');
            const companyForm = document.getElementById('companyForm');
            const formHeading = document.getElementById('form-heading');

            formHeading.innerHTML = '<h2>Add a New Company</h2>';
            formHeading.innerHTML = '<h2>Edit Company Information</h2>';

            addCompanySection.classList.remove('d-none');
            createCompanyButton.classList.add('d-none');

            try {
                const response = await fetch(`/admin/companies/edit/${companyId}`);
                const result = await response.json();

                if (result.success) {
                    const { name, intro } = result.data;
                    companyForm.elements['companyName'].value = name;
                    companyForm.elements['introText'].value = intro;
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
