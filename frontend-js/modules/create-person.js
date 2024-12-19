// Get the button and section elements
const createPersonButton = document.getElementById('create-person-btn');
const addPersonSection = document.getElementById('add-person-section');
const formHeading = document.getElementById('people-form-heading');

// Add click event listener to the button
document.addEventListener('DOMContentLoaded', () => {
  const createPersonButton = document.getElementById('create-person-btn');
  const addPersonSection = document.getElementById('add-person-section');
  const formHeading = document.getElementById('people-form-heading');

  if (createPersonButton && addPersonSection && formHeading) {
      createPersonButton.addEventListener('click', () => {
          createPersonButton.classList.add('d-none');
          formHeading.innerHTML = '<h2>Add a New Staff Member</h2>';
          addPersonSection.classList.remove('d-none');
      });
  }
});
