document.querySelectorAll('.showPeople').forEach((icon) => {

    icon.addEventListener('click', async (event) => {

        const CompanyId = event.currentTarget.dataset.id;
        console.log(`Company ID: ${CompanyId}`);

        const companyId = event.target.getAttribute('data-id');

        try {
            const response = await fetch(`/admin/companies/${companyId}/people`);

            console.log("response = ", response);

            const result = await response.json();

            if (result.ok) {
                console.log("Result ok!");
                // Update the UI with the people data
            } else {
                console.error('Error fetching people:', people.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }

    });
});
