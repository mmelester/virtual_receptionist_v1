// Get the button and section elements
const createCompanyButton = document.getElementById('create-company-btn');
const addCompanySection = document.getElementById('add-company-section');

// Add click event listener to the button
createCompanyButton.addEventListener('click', function () {
  // Hide the button
  createCompanyButton.classList.add('d-none');

  // Remove the 'd-none' class from the section
  addCompanySection.classList.remove('d-none');
});
