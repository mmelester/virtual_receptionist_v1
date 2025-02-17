/*
 * This script manages the UI for adding a new staff member:
 * - Retrieves the "create person" button, the section for adding a person, and the form heading.
 * - Waits for the DOM to fully load and then checks if these elements exist.
 * - When the "create person" button is clicked, the script:
 *     • Hides the button by adding the 'd-none' class,
 *     • Updates the form heading to display "Add a New Staff Member",
 *     • Reveals the add person section by removing the 'd-none' class.
 */

// Get the button and section elements
const createPersonButton = document.getElementById('create-person-btn');
const addPersonSection = document.getElementById('add-person-section');
const formHeading = document.getElementById('person-form-heading');

// Add click event listener to the button
document.addEventListener('DOMContentLoaded', () => {
  const createPersonButton = document.getElementById('create-person-btn');
  const addPersonSection = document.getElementById('add-person-section');
  const formHeading = document.getElementById('person-form-heading');

  if (createPersonButton && addPersonSection && formHeading) {
      createPersonButton.addEventListener('click', () => {
          createPersonButton.classList.add('d-none');
          formHeading.innerHTML = '<h2>Add a New Staff Member</h2>';
          addPersonSection.classList.remove('d-none');
      });
  }
});
