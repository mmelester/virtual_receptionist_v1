// Purpose: Contains the JavaScript code for the user page.
import { setEqualWidths } from '/frontend-js/modules/setEqualWidths.js';
import { handleUserFormSubmission } from '/frontend-js/modules/handleUserFormSubmission.js';
document.addEventListener('DOMContentLoaded', () => {

setEqualWidths('.user-username');
setEqualWidths('.user-password');
setEqualWidths('.user-email');
setEqualWidths('.user-role');

const closeBtn = document.getElementById('close-btn');
const saveUserBtn = document.getElementById('save-user-btn')

closeBtn.addEventListener('click', function () {
    window.location.reload(); // Force a page refresh
});

saveUserBtn.addEventListener('click', handleUserFormSubmission);

});