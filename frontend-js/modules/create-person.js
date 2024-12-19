// Get the button and section elements
const createPersonButton = document.getElementsByClassName('create-person-btn')[0];
const addPersonSection = document.getElementsByClassName('add-person-section')[0];
const formHeading = document.getElementById('form-heading');

// Add click event listener to the button
createPersonButton.addEventListener('click', function () {
  // Hide the button
  createPersonButton.classList.add('d-none');

  // Setting heading back to add companies
  formHeading.innerHTML = '<h2>Add a New Staff Member</h2>';
  // Remove the 'd-none' class from the section'
  addPersonSection.classList.remove('d-none');
});
