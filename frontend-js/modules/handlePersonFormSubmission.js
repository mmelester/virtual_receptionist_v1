import { drawSavedImage, getImg } from './drag-n-drop';

export async function handlePersonFormSubmission(event) {
    let errors = [];
    let personId;
    const personName = document.getElementById('personName').value.trim();
    const replyText = document.getElementById('replyText').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const outlet = document.getElementById('outlet').value.trim();
    const companyId = localStorage.getItem('editId');
    const flag = localStorage.getItem('editFlag');
    console.log("handlePersonFormSubmission called", companyId, flag);

    if (!personName) errors.push("Person's name is required.");
    if (!replyText) errors.push('Reply text is required.');
    if (!mobile && !email && !outlet) errors.push('Either mobile number, email address or outlet address is required.');
    const img = getImg();
    if (!img) errors.push('An image is required. Please add an image.');

    const croppedCanvas = drawSavedImage();
    if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    const croppedImage = croppedCanvas.toDataURL('image/png');
    
    personId = flag === 'c' ? personId = crypto.randomUUID() : await localStorage.getItem('personId');
    console.log("PID is ", personId)
    
    const personData = {
        id: personId,
        name: personName,
        reply: replyText,
        mobile: mobile,
        email: email,
        outlet: outlet,
        image: croppedImage,
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
