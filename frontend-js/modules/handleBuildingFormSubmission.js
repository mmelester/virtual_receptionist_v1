/*
 * handleBuildingFormSubmission(event)
 *
 * This asynchronous function handles the submission of the building form, performing image validation,
 * cropping, and data submission to the server.
 *
 * Workflow:
 *  1. Prevents the default form submission.
 *
 *  2. Retrieves form input values (building name and intro text) and validates that both fields are filled.
 *
 *  3. Obtains the current image using getImg() and ensures that an image is present.
 *
 *  4. Calls drawSavedImage() to extract the cropped portion of the image from the canvas. The cropped image
 *     is then converted to a Base64-encoded PNG string.
 *
 *  5. If any validation errors occur (missing text fields or image), the errors are sent to the server,
 *     and the page is reloaded to display error messages.
 *
 *  6. If there are no errors, prepares the building data (name, intro text, and image) and sends it to the server
 *     using either a POST request (for creating a new building) or a PUT request (for updating an existing 
 *     building), based on the edit flag stored in localStorage.
 *
 *  7. Upon receiving the server response:
 *       - If successful, the page is refreshed and the user is alerted with a success message.
 *       - If unsuccessful, an error alert is displayed.
 *
 * Dependencies:
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 *  - getImg: Retrieves the current image object.
 *  - previewFile: (Imported for image preview functionality, used elsewhere.)
 *
 * The function uses localStorage to store and retrieve the edit flag ('c' for create, 'e' for edit) and the current
 * building identifier.
 */
import { drawSavedImage, getImg, previewFile } from './drag-n-drop';

export async function handleBuildingFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("handleBuildingFormSubmission Called!");
    let errors = []; // Initialize an array to store validation errors

    // Retrieve the company Id and editFlag from localStorage
    const Id = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');

    // Collect form data
    const buildingName = document.getElementById('buildingName').value.trim();
    const introText = document.getElementById('buildingIntroText').value.trim();

    console.log("building name and intro ", buildingName, introText);

    // Validate form inputs
    if (!buildingName) errors.push('Building name is required.');
    if (!introText) errors.push('Intro text is required.');

    // Get the current image value
    const img = getImg();
    if (!img) errors.push('An image is required. Please add an image.');

    // Save the cropped image
    const croppedCanvas = drawSavedImage();
    if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

    // If there are errors, send them to the server and stop further execution
    if (errors.length > 0) {
         
        console.log("Errors present");
        
        try {
            await fetch('/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ errors }),
            });
            window.location.reload(); // Force a page refresh to display flash errors
            return; // Stop further execution
        } catch (error) {
            console.error('Error sending errors:', error);
        }
    }

    const croppedImage = croppedCanvas.toDataURL('image/png'); // Convert the cropped image to Base64

    // Prepare data for the server
    const buildingData = {
        name: buildingName,
        intro: introText,
        image: croppedImage,
    };

    console.log("buildingData", buildingData);

    try {
        const url = flag === 'c' ? '/admin/building' : `/admin/building`;
        const method = flag === 'c' ? 'POST' : 'PUT';
        // Make a POST or PUT request to the server to save/update the building data
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buildingData),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message || 'An error occurred.');
            console.log(!response);
            return;
        }
        location.reload(); // Refresh the page
        alert(result.message || 'Operation successful!');

    } catch (error) {
        console.error('Error submitting form:', error);
        const errorContainer = document.querySelector('.alert-danger ul');
        if (errorContainer) {
            errorContainer.innerHTML = ''; // Clear previous errors
            const li = document.createElement('li');
            li.textContent = 'An unexpected error occurred. Please try again.';
            errorContainer.appendChild(li);
        }
    }
}

