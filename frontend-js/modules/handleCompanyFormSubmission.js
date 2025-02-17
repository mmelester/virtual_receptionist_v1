/*
 * handleCompanyFormSubmission(event)
 *
 * This asynchronous function manages the submission process for the company form. It performs the following tasks:
 *
 *  1. Prevents the default form submission behavior.
 *
 *  2. Retrieves the company ID and edit flag from localStorage to determine if the operation is for creation ('c') 
 *  or editing.
 *
 *  3. Collects input values from the form (company name and intro text) and validates that they are not empty.
 *
 *  4. Checks for the presence of an image by using getImg() and extracts the cropped image from the canvas using 
 *     drawSavedImage().
 *
 *  5. If validation errors exist (missing text fields or image issues), it sends these errors to the server via a 
 *     POST request to
 *     '/admin/companies/add' and then reloads the page.
 *
 *  6. If all inputs are valid, it converts the cropped canvas image to a Base64-encoded PNG string.
 *
 *  7. Constructs a companyData object containing the company name, intro text, the Base64 image, and an empty 
 *     'people' array.
 *
 *  8. Determines the correct API endpoint and HTTP method (POST for creation or PUT for editing) based on the edit 
 *     flag.
 *
 *  9. Sends the companyData to the server, then alerts the user with the operation's result, resets the form, and 
 *     reloads the page.
 *
 *  10. Catches and logs any unexpected errors that occur during the submission process.
 *
 * Dependencies:
 *  - getImg: Retrieves the current image object.
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 */
import { drawSavedImage, getImg } from './drag-n-drop';

// Define a function to handle form submission logic
export async function handleCompanyFormSubmission(event) {

    // Initialize the errors array
    let errors = [];
    // Retrieve the company Id and editFlag from localStorage
    const Id = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');

    console.log("handleCompanyFormSubmission Flag = ", flag);

    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const companyName = document.getElementById('companyName').value.trim();
    const introText = document.getElementById('introText').value.trim();

    // Validate the inputs
    if (!companyName) errors.push('Company name is required.');
    if (!introText) errors.push('Intro text is required.');

    // Get the current value of img
    const img = getImg();
    if (!img) errors.push('An image is required. Please add an image.');

    // Save the cropped image
    const croppedCanvas = drawSavedImage();
    if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

    // If there are errors, send them to the server and stop further execution
    if (errors.length > 0) {
        try {
            await fetch('/admin/companies/add', {
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

    const croppedImage = croppedCanvas.toDataURL('image/png'); // Convert cropped image to Base64

    // Prepare data for the server
    const companyData = {
        name: companyName,
        intro: introText,
        image: croppedImage,
        people: []
    };

    try {
        const url = flag === 'c' ? '/admin/companies/add' : `/admin/companies/edit/${Id}`;
        const method = flag === 'c' ? 'POST' : 'PUT';

        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(companyData),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message || 'An error occurred.');
            console.log(!response);
            return;
        }

        alert(result.message || 'Operation successful!');
        document.getElementById('companyForm').reset(); // Optionally reset the form
        window.location.reload(); // Refresh the page
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}
