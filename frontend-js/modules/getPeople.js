document.addEventListener('click', async (event) => {

    console.log("getPeople.js called");

    if (event.target.classList.contains('showPeople')) {
        const companyId = event.target.getAttribute('data-id');
        try {
            const response = await fetch(`/admin/companies/${companyId}/people`);

            console.log("response = ", response);

            const people = await response.json();

            if (response.ok) {
                console.log('People:', people);
                // Update the UI with the people data
            } else {
                console.error('Error fetching people:', people.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
});
