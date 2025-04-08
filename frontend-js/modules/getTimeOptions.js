
// Helper function to round to nearest 30 min
function getTimeOptions() {
    const now = new Date();
    const minutes = now.getMinutes();
    const offset = minutes < 15 ? -minutes : (minutes < 45 ? 30 - minutes : 60 - minutes);
    const nearest = new Date(now.getTime() + offset * 60000);

    const options = [-30, 0, 30].map(offset => {
    const optionTime = new Date(nearest.getTime() + offset * 60000);
    const label = optionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { label, value: optionTime.toISOString() };
    });

    return options;
}

// Populate dropdown
const apptSelect = document.getElementById('appt-time');
const options = getTimeOptions();
options.forEach((opt, idx) => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    if (idx === 1) option.selected = true; // select the "nearest" time
    apptSelect.appendChild(option);
});