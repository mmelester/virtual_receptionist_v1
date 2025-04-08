// Helper function to determine time slots with 5-minute leeway.
function getTimeOptions() {
    const now = new Date();
    // Reset seconds and milliseconds for accuracy.
    now.setSeconds(0, 0);
    
    // Calculate the lower half-hour boundary (e.g., for 8:36, the lower boundary is 8:30)
    const lowerMinutes = Math.floor(now.getMinutes() / 30) * 30;
    const lower = new Date(now);
    lower.setMinutes(lowerMinutes);
    
    // Compute the difference in minutes between now and the lower boundary.
    const diff = (now - lower) / 60000; // convert milliseconds to minutes
    
    // Using 5-minute leeway:
    // If within 5 minutes of the lower half-hour (e.g., 8:35), default to the lower half-hour.
    // Otherwise (e.g., 8:36), default to the next half-hour.
    const defaultTime = diff <= 5 ? lower : new Date(lower.getTime() + 30 * 60000);
    
    // Build time slot options: the default time plus 30 and 60 minutes later.
    const options = [0, 30, 60].map(offset => {
        const optionTime = new Date(defaultTime.getTime() + offset * 60000);
        const label = optionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return { label, value: optionTime.toISOString() };
    });
    return options;
}

// Get computed time options.
const timeOptions = getTimeOptions();

// Add "None" as an additional option (here we set its value to an empty string,
// but you can adjust that as needed).
const options = [{ label: "None", value: "" }].concat(timeOptions);

// Populate the dropdown.
// Note: We choose the computed time option as the default selection (index 1)
// so that "None" is available but not pre-selected.
const apptSelect = document.getElementById('appt-time');
options.forEach((opt, idx) => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    if (idx === 1) option.selected = true; // Set the default time option.
    apptSelect.appendChild(option);
});
