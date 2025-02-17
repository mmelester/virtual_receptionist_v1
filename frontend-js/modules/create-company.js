/*
 * This script handles the UI interaction for adding a new company:
 * - It retrieves the button (with class "create-company-btn"), the section to add a company (with class 
 * "add-item-section"), and the form heading element.
 * - When the button is clicked, the script:
 *     • Hides the button by adding the 'd-none' class.
 *     • Updates the form heading to display "Add a New Company".
 *     • Reveals the company section by removing the 'd-none' class.
 */

// Get the button and section elements
const createCompanyButton = document.getElementsByClassName('create-company-btn')[0];
const addCompanySection = document.getElementsByClassName('add-item-section')[0];
const formHeading = document.getElementById('form-heading');

// Add click event listener to the button
createCompanyButton.addEventListener('click', function () {
  // Hide the button
  createCompanyButton.classList.add('d-none');

  // Setting heading back to add companies
  formHeading.innerHTML = '<h2>Add a New Company</h2>';
  // Remove the 'd-none' class from the section'
  addCompanySection.classList.remove('d-none');
});
