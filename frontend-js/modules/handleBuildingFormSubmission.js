import { drawSavedImage, getImg, previewFile } from './drag-n-drop';

export async function handleBuildingFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("handleBuildingFormSubmission Called!");
    let errors = []; // Initialize an array to store validation errors

    const { building, buildingExists } = clientData;

    // Use building and buildingExists directly in your logic
    console.log('Building exists:', buildingExists);

    if (building && buildingExists) {
        await showBuilding(building);
    } 
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

    // If there are errors, send them to the server and stop further execution
    if (errors.length > 0) {
         
        console.log("Errors present");
        
        try {
            await fetch('/admin/companies', {
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

        const method = !buildingExists ? 'POST' : 'PUT';
        console.log("Method = ", method, "Payload = ", buildingData);

        // Make a POST or PUT request to the server to save/update the building data
        const response = await fetch('/admin/building', {
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
        await showBuilding(buildingData);

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

async function showBuilding(buildingData) {
    console.log("buildingData from showBuilding", buildingData);
    try {
        const buildingForm = document.getElementById('buildingForm');
        const deleteIcon = document.querySelector('.delete-building-image-btn');

        // Destructure the building data
        const { name, intro, image } = buildingData;

        console.log("Name is ", name);

        // Populate the form fields
        buildingForm.elements['buildingName'].value = name || '';
        buildingForm.elements['introText'].value = intro || '';

        // Preload the image into the canvas
        if (image) {
            const img = new Image();
            img.src = image;

            img.onload = async function () {
                try {
                    const response = await fetch(img.src);

                    if (!response.ok) {
                        throw new Error(`Failed to fetch image. Status: ${response.status}`);
                    }

                    const blob = await response.blob();
                    const file = new File([blob], "uploadedImage.jpg", { type: blob.type });

                    // Use the previewFile function to display the image
                    previewFile(file);
                } catch (error) {
                    console.error('Error loading image:', error.message);
                    alert('There was an error processing the image. Please try again.');
                }
            };
        }
    } catch (error) {
        console.error('Error during edit building:', error.message);
    }
}
