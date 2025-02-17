/*
 * This script manages the UI for adding a new building:
 * - Waits for the DOM to fully load.
 * - Retrieves the "create building" button, the section for adding a building, and the form heading.
 * - Checks if a building already exists (via a hidden element's value) and hides the button if true.
 * - Adds a click event listener to the button that:
 *     • Hides the button,
 *     • Updates the form heading to "Add a New Building",
 *     • Displays the section for adding a building.
 */
document.addEventListener('DOMContentLoaded', function () {
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

