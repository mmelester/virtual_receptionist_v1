
/*
 * This script scans for Kasa smart plugs and displays the results on the page.
 *
 * Workflow:
 *  - Obtains a reference to the "outlet-list" element.
 *  - Immediately calls the scanOutlets() function to start scanning.
 *
 * scanOutlets() function:
 *  - Logs a message indicating the start of the scanning process.
 *  - Updates the outlet list with a "Scanning for devices..." message.
 *  - Sends an asynchronous GET request to the "/admin/scan-outlets" endpoint.
 *  - Parses the response as JSON.
 *  - Clears the outlet list and:
 *       • Displays a "No smart plugs found." message if no devices are returned.
 *       • Iterates over the returned devices and creates a list item for each, displaying the device's alias and IP 
 *         address.
 *  - Catches and logs any errors, updating the outlet list with an error message if necessary.
 *
 * Additionally:
 *  - An event listener is attached to the element with ID "scan-outlets-link" so that clicking the link
 *    triggers a new scan (and prevents the default link behavior).
 */
const outletList = document.getElementById("outlet-list");
scanOutlets();

async function scanOutlets() {
    console.log("Scanning for Kasa smart plugs...");
    outletList.innerHTML = "<li>Scanning for devices...</li>";

    try {
        const response = await fetch("/admin/scan-outlets");
        const devices = await response.json();

        outletList.innerHTML = ""; // Clear previous results
        if (devices.length === 0) {
            outletList.innerHTML = "<li>No smart plugs found.</li>";
        } else {
            devices.forEach(device => {
                const li = document.createElement("li");
                li.textContent = `${device.alias} - ${device.ip}`;
                outletList.appendChild(li);
            });
        }
    } catch (error) {
        console.error("Error scanning outlets:", error);
        outletList.innerHTML = "<li>Error scanning for smart plugs.</li>";
    }
}
document.getElementById("scan-outlets-link").addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default link behavior\
    scanOutlets();
});