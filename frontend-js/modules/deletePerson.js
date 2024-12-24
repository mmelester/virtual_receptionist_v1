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
                        alert('Person deleted successfully!');
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
