/*
 * This script attaches click event listeners to all elements with the class 'delete-btn'
 * once the DOM has fully loaded. For each delete button, it:
 *  - Retrieves the item's ID and deletion route from data attributes.
 *  - Prompts the user with a confirmation dialog before deletion.
 *  - If confirmed, sends an asynchronous DELETE request to the server using the fetched route and ID.
 *  - Processes the server's JSON response:
 *       • If deletion is successful, reloads the page to update the item list.
 *       • If unsuccessful, displays an error message to the user.
 *  - Catches and logs any errors that occur during the deletion process.
 */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-btn').forEach((icon) => {

        icon.addEventListener('click', async (event) => {
    
            const id = event.currentTarget.dataset.id;
            console.log(`DeleteItem Called, Delete ID: ${id}`);
    
            const deleteRoute = event.target.dataset.route; // Get the route from a data attribute
    
            console.log("delete route = ", deleteRoute);
    
            if (confirm('Are you sure you want to delete this item?')) {
    
                try {
                    const response = await fetch(`${deleteRoute}/${id}`, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' }
                    });
    
                    const result = await response.json();
    
                    console.log(result);
    
                    if (result.success) {
                        // alert('Item deleted successfully.');
                        location.reload(); // Reload the page to update the list
                    } else {
                        alert(result.message || 'Failed to delete item.');
                    }
                } catch (error) {
                    alert('An unexpected error occurred.');
                    console.error(error);
                }
            }
        });
    });
});

