document.querySelectorAll('.fa-trash').forEach((icon) => {
    icon.addEventListener('click', async (event) => {
        const companyId = event.target.dataset.id; 

        if (confirm('Are you sure you want to delete this company?')) {
            try {
                const response = await fetch(`/admin/companies/delete/${companyId}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                });

                const result = await response.json();
                if (result.success) {
                    // alert('Company deleted successfully.');
                    location.reload(); // Reload the page to update the list
                } else {
                    alert(result.message || 'Failed to delete the company.');
                }
            } catch (error) {
                alert('An unexpected error occurred.');
                console.error(error);
            }
        }
    });
});