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

