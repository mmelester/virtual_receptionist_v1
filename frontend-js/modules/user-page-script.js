/*
 * User Page Script
 *
 * Purpose:
 *  - Manages the user page interactions and layout adjustments for user pages.
 *
 * Functionality:
 *  - Imports utility modules:
 *      • setEqualWidths: Adjusts a group of elements to have the same width based on the widest element.
 *      • handleUserFormSubmission: Handles the submission of the user form, including validation and data 
 *        processing.
 *
 *  - On DOMContentLoaded:
 *      • Calls setEqualWidths on elements with the classes:
 *          - '.user-username'
 *          - '.user-password'
 *          - '.user-email'
 *          - '.user-role'
 *        to ensure consistent column widths.
 *
 *      • Attaches a click event listener to the close button (id "close-btn") that reloads the page.
 *
 *      • Attaches a click event listener to the save button (id "save-user-btn") that triggers the user form 
 *        submission.
 */
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