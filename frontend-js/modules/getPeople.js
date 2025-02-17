/*
 * This script handles the display of people associated with a company.
 *
 * Workflow:
 *  - Attaches click event listeners to all elements with the "showPeople" class.
 *  - When clicked, it retrieves the company ID from the element's data attribute and stores it in localStorage 
 *    (using keys "editId" and "addId"), and sets an "editFlag" to 'c'.
 *  - It then makes an asynchronous API call to fetch the people data for that company.
 *  - If the response is successful and the API returns a success flag, the user is redirected to the company's 
 *    people page in the admin interface.
 *  - Any errors during fetching are logged to the console.
 */
document.querySelectorAll('.showPeople').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.getAttribute('data-id');

        localStorage.setItem('editId', companyId);

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
