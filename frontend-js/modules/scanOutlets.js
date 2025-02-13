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