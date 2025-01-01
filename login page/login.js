document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form"); // Select the form element
  const usernameInput = document.getElementById("username_or_email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get values of inputs
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate inputs
    if (username === "" || password === "") {
      alert("Please fill in both username/email and password.");
      return; // Stop further execution
    }

    // Validate email format (if username is an email)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (username.includes("@") && !emailRegex.test(username)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation (optional)
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // If validation passes, proceed with form submission (e.g., send to backend)
    // Simulate form submission (for now just display an alert)
    alert("Form submitted successfully!");
  });
});
