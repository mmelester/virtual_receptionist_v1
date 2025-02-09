
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