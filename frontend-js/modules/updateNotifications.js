/*
 * This script sets up event listeners for SMS and Email notification update buttons once the DOM is loaded.
 *
 * Functionality:
 *  - For the SMS update:
 *      • Listens for a click event on the "sms-update-btn".
 *      • Prevents the default form submission.
 *      • Extracts form data from "smsNotificationForm", converts it to a JSON object.
 *      • Sends a PUT request to the "/admin/notifications/update-sms" endpoint with the JSON payload.
 *      • Alerts the user upon success and redirects to the notifications page; logs errors if any occur.
 *
 *  - For the Email update:
 *      • Listens for a click event on the "email-update-btn".
 *      • Prevents the default form submission.
 *      • Extracts form data from "emailNotificationForm1", converts it to a JSON object.
 *      • Sends a PUT request to the "/admin/notifications/update-email" endpoint with the JSON payload.
 *      • Alerts the user upon success and redirects to the notifications page; logs errors if any occur.
 */
document.addEventListener("DOMContentLoaded", function () {
    // SMS Update Button
    document.getElementById("sms-update-btn").addEventListener("click", async function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(document.getElementById("smsNotificationForm"));
        let jsonObject = {};
        formData.forEach((value, key) => { jsonObject[key] = value; });

        console.log("🔍 Sending SMS update:", jsonObject);

        try {
            let response = await fetch('/admin/notifications/update-sms', { // 🚀 New API endpoint
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jsonObject)
            });

            let result = await response.text();

            console.log("Result ", result)

            if (response.ok) {
                alert("SMS notifications updated successfully.");
                window.location.href = "/admin/notifications"; 
            } else {
                console.log("Failed to update SMS notifications: " + result);
            }
        } catch (error) {
            console.error("❌ Error updating SMS:", error);
            alert("An error occurred while updating SMS notifications.");
        }
    });

    // EMAIL Update Button
    document.getElementById("email-update-btn").addEventListener("click", async function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(document.getElementById("emailNotificationForm1"));
        let jsonObject = {};
        formData.forEach((value, key) => { jsonObject[key] = value; });

        console.log("🔍 Sending EMAIL update:", jsonObject);

        try {
            let response = await fetch('/admin/notifications/update-email', { // 🚀 New API endpoint
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jsonObject)
            });

            let result = await response.text();
            if (response.ok) {
                alert("Email notifications updated successfully.");
                window.location.href = "/admin/notifications"; 
            } else {
                console.log("Failed to update email notifications: " + result);
            }
        } catch (error) {
            console.error("❌ Error updating email:", error);
            alert("An error occurred while updating email notifications.");
        }
    });
});
