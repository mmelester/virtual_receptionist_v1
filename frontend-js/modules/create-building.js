document.addEventListener('DOMContentLoaded', function() {
    // Get the button and section elements
    const createBuildingButton = document.getElementById('create-building-btn');
    const addBuildingSection = document.getElementById('add-building-section');
    const formHeading = document.getElementById('form-heading');

    // Check if building exists
    const buildingExists = document.getElementById('buildingPresent')?.value === 'true';

    // Conditionally hide the button if building exists
    if (buildingExists) {
        createBuildingButton.classList.add('d-none');
    }

    // Add click event listener to the button
    createBuildingButton.addEventListener('click', function () {
        // Hide the button
        createBuildingButton.classList.add('d-none');
        // Set heading
        formHeading.innerHTML = 'Add a New Building';
        // Show the section
        addBuildingSection.classList.remove('d-none');
    });
});

