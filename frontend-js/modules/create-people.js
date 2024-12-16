// Get the button and section elements
const createPeopleButton = document.getElementById('create-people-btn');
const addPeopleSection = document.getElementById('add-people-section');
const formHeading = document.getElementById('people-form-heading');

// Add click event listener to the button
document.addEventListener('DOMContentLoaded', () => {
  const createPeopleButton = document.getElementById('create-people-btn');
  const addPeopleSection = document.getElementById('add-people-section');
  const formHeading = document.getElementById('people-form-heading');

  if (createPeopleButton && addPeopleSection && formHeading) {
      createPeopleButton.addEventListener('click', () => {
          createPeopleButton.classList.add('d-none');
          formHeading.innerHTML = '<h2>Add a New Staff Member</h2>';
          addPeopleSection.classList.remove('d-none');
      });
  }
});
