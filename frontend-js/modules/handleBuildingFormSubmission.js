import { drawSavedImage, getImg } from './drag-n-drop';

export async function handleBuildingFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("handleBuildingFormSubmission Called!");

    let errors = []; // Initialize an array to store validation errors

    // Collect form data
    const buildingName = document.getElementById('buildingName').value.trim();
    const introText = document.getElementById('buildingIntroText').value.trim();

    // Validate form inputs
    if (!buildingName) errors.push('Building name is required.');
    if (!introText) errors.push('Intro text is required.');

    // Get the current image value
    const img = getImg();
    if (!img) errors.push('An image is required. Please add an image.');


    // Save the cropped image
    const croppedCanvas = drawSavedImage();
    if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

    // If there are validation errors, display them and stop further execution
    if (errors.length > 0) {
        console.log("Errors: ", errors); 
        const errorContainer = document.querySelector('.alert-danger ul');
        if (errorContainer) {
            errorContainer.innerHTML = ''; // Clear previous errors
            errors.forEach((error) => {
                const li = document.createElement('li');
                li.textContent = error;
                errorContainer.appendChild(li);
            });
        } else {
            console.error('Error container not found in DOM.');
        }
        return;
    }

    const croppedImage = croppedCanvas.toDataURL('image/png'); // Convert the cropped image to Base64

    // Prepare data for the server
    const buildingData = {
        name: buildingName,
        intro: introText,
        image: croppedImage,
    };

    try {
        // Make a POST request to the server to save the building data
        const response = await fetch('/admin/building', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buildingData),
        });

        const result = await response.json();

        if (!response.ok) {
            // Display server-side validation or error messages
            const errorContainer = document.querySelector('.alert-danger ul');
            console.log("Bad response: ", response);
            if (errorContainer) {
                errorContainer.innerHTML = ''; // Clear previous errors
                const li = document.createElement('li');
                li.textContent = result.message || 'An error occurred.';
                errorContainer.appendChild(li);
            }
            return;
        }

        // Refresh the page on success
        // window.location.reload();
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
