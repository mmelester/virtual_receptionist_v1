document.querySelectorAll('.showPeople').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.getAttribute('data-id');
        console.log("getPeople.js being executed; companyId = ", companyId);

        try {
            const response = await fetch(`/admin/companies/${companyId}/people`);

            console.log("Response status:", response.status);

            if (!response.ok) {
                console.error('Network response was not ok');
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                console.log("People fetched successfully:", result.people);
                 // Redirect to the page after successfully fetching data
                 window.location.href = `/admin/companies/${companyId}/people`;
            } else {
                console.error('Error fetching people:', result.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    });
});
