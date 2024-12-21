import { drawSavedImage, getImg } from './drag-n-drop';

export async function handlePersonFormSubmission(event) {
    // Initialize the errors array
    let errors = [];

    // Collect form data
    const personName = document.getElementById('personName').value.trim();
    const replyText = document.getElementById('replyText').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const outlet = document.getElementById('outlet').value.trim();

    // Retrieve the companyId and editFlag from localStorage
    const personId = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');

    // Validate the inputs
    if (!personName) {
        errors.push("Person's name is required.");
    }

    if (!replyText) {
        errors.push('Response text is required.');
    }

    // Get the current value of img
    const img = getImg();
    if (!img) {
        errors.push('A image is required.  Please add image.');
    }

    console.log("Errors ", errors);

    // Save the cropped image
    const croppedCanvas = drawSavedImage();
    if (!croppedCanvas) {
        errors.push('No image to save! Please ensure the image is correctly cropped.');
    }

    // If there are errors, display them and stop execution
    if (errors.length > 0) {

        try {
            // Send the errors to the server
            await fetch('/admin/companies/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ errors }), // Send the errors to the server
            });
            window.location.reload(); // Force a page refresh to display flash errors
            return; // Stop further execution since there are errors
        } catch (error) {
            console.error('Error sending errors:', error);
        }
    }
    
    const croppedImage = croppedCanvas.toDataURL('image/png'); // Convert the cropped image to a Base64 string

    // Prepare the data object to send to the server
    const companyData = {
        name: personName,
        reply: replyText,
        image: croppedImage, // Add the Base64 image data
    };

    if (flag === 'c') {
        try {
            const response = await fetch('/admin/companies/people/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: personName, reply: replyText, image: croppedImage }),
            });
        
            const result = await response.json();
        
            if (!response.ok) {
                // Display server-side validation errors
                alert(result.message || 'An error occurred while adding the company.');
                return;
            }
        
            // alert(result.message || 'Company added successfully!');
            document.getElementById('personForm').reset(); // Optionally reset the form
            window.location.reload(); // Force a page refresh
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    } else {
        try {
            const response = await fetch(`/admin/companies/edit/${companyId}`, {
                method: 'PUT', // Use the PUT method for updates
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: personName,
                    reply: replyText,
                    image: croppedImage, // Send updated image data
                }),
            });
    
            const result = await response.json();
    
            if (!response.ok) {
                // Handle server-side errors
                alert(result.message || 'An error occurred while updating the company.');
                return;
            }
    
            alert(result.message || 'Company updated successfully!');
            window.location.reload(); // Refresh the page
        } catch (error) {
            console.error('Error updating company:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    }
}

