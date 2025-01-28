// Get the button and section elements
const createBuildingButton = document.getElementsByClassName('create-building-btn')[0];
const addBuildingSection = document.getElementsByClassName('add-item-section')[0];
const formHeading = document.getElementById('form-heading');

// Add click event listener to the button
createBuildingButton.addEventListener('click', function () {
// Hide the button
createBuildingButton.classList.add('d-none');
// Setting heading back to add companies
formHeading.innerHTML = '<h3>Add a New Building</h3>';
// Remove the 'd-none' class from the section'
    addBuildingSection.classList.remove('d-none');
});
