
/*
 * Toggle Password Visibility:
 *
 * This script adds a click event listener to the element with the ID "togglePassword".
 * When the toggle button is clicked, it checks the type of the password input field (ID "password")
 * and toggles it between "password" (masked) and "text" (unmasked). Simultaneously, it updates the
 * button's text content to reflect the current state:
 *   - Displays "🙈" when the password is visible (indicating a "hide" action).
 *   - Displays "👁️" when the password is hidden (indicating a "show" action).
 */
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const toggleButton = this;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "🙈"; // Change icon to "hide"
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "👁️"; // Change icon to "show"
    }
});
    