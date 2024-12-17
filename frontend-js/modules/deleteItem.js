document.querySelectorAll('.delete-btn').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const id = event.target.dataset.id;
        const deleteRoute = event.target.dataset.route; // Get the route from a data attribute

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
