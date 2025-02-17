/*
 * handlePersonFormSubmission(event)
 *
 * This function manages the submission process for a person (staff member) form, handling both creation and update operations.
 *
 * Workflow:
 *  - Prevents the default form submission behavior.
 *  - Collects and trims input values for person name, title, reply text, mobile, email, and outlet.
 *  - Retrieves the company ID and edit flag from localStorage to determine if the operation is a creation ('c') or 
 *    an update.
 *  - Validates the form inputs:
 *      • Ensures that the person's name and reply text are provided.
 *      • Requires at least one contact detail (mobile, email, or outlet).
 *  - Obtains the current image using getImg() and extracts the cropped image using drawSavedImage().
 *      • If the image or cropped canvas is missing, validation errors are pushed.
 *
 *  - If any validation errors exist:
 *      • Sends the errors to the server endpoint specific to the company.
 *      • Reloads the page to display error messages.
 *
 *  - If validation passes:
 *      • Converts the cropped canvas to a Base64-encoded PNG string.
 *      • Determines the person ID:
 *            - For creation (flag 'c'): generates a new UUID and sets consent to "PENDING".
 *            - For update: retrieves the existing person ID from localStorage.
 *      • Constructs a personData object containing all form data, the image, and consent status.
 *
 *  - Prepares the API endpoint URL based on the operation type:
 *      • For creation: uses the endpoint to add a new person.
 *      • For update: uses the endpoint to edit an existing person.
 *
 *  - Sends a PUT request with the personData in JSON format.
 *  - If the server response indicates an error, alerts the user with the error message.
 *  - On success, reloads the page to reflect the updated information.
 *
 * Dependencies:
 *  - getImg: Retrieves the current image object.
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 */
import { drawSavedImage, getImg } from './drag-n-drop';

export async function handlePersonFormSubmission(event) {
    let errors = [];
    let personId;
    let consent;
    const personName = document.getElementById('personName').value.trim();
    const personTitle = document.getElementById('personTitle').value.trim();
    const replyText = document.getElementById('replyText').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const outlet = document.getElementById('outlet').value.trim();
    const companyId = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');
    console.log("handlePersonFormSubmission called", companyId, flag);

    if (!personName) errors.push("Person's name is required.");
    if (!replyText) errors.push('Reply text is required.');
    if (!(mobile || email || outlet)) errors.push('Either mobile number, email address or outlet address is required.');
    const img = getImg();

    const croppedCanvas = drawSavedImage();
    if (!img) {
        errors.push('An image is required. Please add an image.');
    } else {  
        if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');
    }
    
    // If there are errors, send them to the server and stop further execution
    if (errors.length > 0) {
        try {
            console.log("Errors in handlePersonFormSubmission")
            await fetch(`/api/companies/${companyId}/people/errors`, {
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

    const croppedImage = croppedCanvas.toDataURL('image/png');
    
    if (flag === 'c') {
        personId = crypto.randomUUID();
        consent = "PENDING";
    } else {
        personId = await localStorage.getItem('personId');
    }
    
    const personData = {
        id: personId,
        name: personName,
        title: personTitle,
        reply: replyText,
        mobile: mobile,
        email: email,
        outlet: outlet,
        image: croppedImage,
        consent: consent
    };

    // console.log("client side ", companyId, personData);

    try {
        const url = flag === 'c' ? `/api/companies/${companyId}/people` : `/admin/companies/${companyId}/people/edit/${personData.id}`;

        console.log("URL/flg", url, "/", flag);

        const response = await fetch(url, {
            method: 'PUT', // Use PUT for updating
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ people: personData }),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message || 'An error occurred while updating the record.');
            return;
        }

        window.location.reload();
    } catch (error) {
        console.error('Error updating company:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}
