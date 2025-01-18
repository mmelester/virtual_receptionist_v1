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
