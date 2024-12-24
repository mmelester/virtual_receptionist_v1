document.querySelectorAll('.showPeople').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.getAttribute('data-id');
        console.log("getPeople.js being executed; companyId = ", companyId);

        // Store the Id and editFlag in localStorage
        localStorage.setItem('addId', companyId);
        localStorage.setItem('editFlag', 'c');

        try {
            // Fetch the data from the API
            const response = await fetch(`/api/companies/${companyId}/people`);
            console.log("Response status:", response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                console.log("People fetched successfully:", result.data);

                // Redirect to the rendered EJS page
                window.location.href = `/admin/companies/${companyId}/people`;
            } else {
                console.error('Error fetching people:', result.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    });
});
