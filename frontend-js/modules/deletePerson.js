/*
 * This script attaches click event listeners to all elements with the class 'delete-person-btn'
 * once the DOM has fully loaded.
 *
 * For each delete button, the script:
 *  - Retrieves the person's ID, associated company ID, and the deletion route from data attributes.
 *  - Verifies that all required data attributes are present; logs an error if any are missing.
 *  - Prompts the user for confirmation before proceeding with the deletion.
 *  - If confirmed, sends an asynchronous DELETE request to a URL constructed using the delete route, company ID, and person ID.
 *  - Processes the JSON response:
 *       • If successful, reloads the page to update the displayed list.
 *       • If unsuccessful, alerts the user with an error message.
 *  - Catches and logs any unexpected errors during the deletion process.
 */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-person-btn').forEach((icon) => {
        icon.addEventListener('click', async (event) => {
            const personId = event.currentTarget.dataset.id;
            const companyId = event.currentTarget.dataset.companyId;
            const deleteRoute = event.currentTarget.dataset.route;

            if (!personId || !companyId || !deleteRoute) {
                console.error('Missing required data attributes.');
                return;
            }

            if (confirm('Are you sure you want to delete this person?')) {
                try {
                    const response = await fetch(`${deleteRoute}/${companyId}/people/delete/${personId}`, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    });

                    const result = await response.json();

                    if (result.success) {
                          location.reload();
                    } else {
                        alert(result.message || 'Failed to delete the person.');
                    }
                } catch (error) {
                    alert('An unexpected error occurred.');
                    console.error(error);
                }
            }
        });
    });
});
