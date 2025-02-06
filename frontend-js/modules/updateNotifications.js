
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
            if (response.ok) {
                alert("SMS notifications updated successfully.");
                window.location.reload();
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
                window.location.reload();
            } else {
                alert("Failed to update email notifications: " + result);
            }
        } catch (error) {
            console.error("❌ Error updating email:", error);
            alert("An error occurred while updating email notifications.");
        }
    });
});
