import { drawSavedImage, getImg } from './drag-n-drop';

document.getElementById('save-image').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Initialize the errors array
    let errors = [];

    // Collect form data
    const companyName = document.getElementById('companyName').value.trim();
    const introText = document.getElementById('introText').value.trim();

    // Retrieve the companyId and editFlag from localStorage
    const companyId = localStorage.getItem('editCompanyId');
    const editFlag = localStorage.getItem('editFlag');

    console.log("edit flag = ", editFlag);

    alert(companyId);

    // Validate the inputs
    if (!companyName) {
        errors.push('Company name is required.');
    }

    if (!introText) {
        errors.push('Intro text is required.');
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
        name: companyName,
        intro: introText,
        image: croppedImage, // Add the Base64 image data
    };

    try {
        const response = await fetch('/admin/companies/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: companyName, intro: introText, image: croppedImage }),
        });
    
        const result = await response.json();
    
        if (!response.ok) {
            // Display server-side validation errors
            alert(result.message || 'An error occurred while adding the company.');
            return;
        }
    
        // alert(result.message || 'Company added successfully!');
        document.getElementById('companyForm').reset(); // Optionally reset the form
        window.location.reload(); // Force a page refresh
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred. Please try again.');
    }
    
    
});

