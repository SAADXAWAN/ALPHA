// script.js
function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation for demo purposes
    if (username === "ALPHA" && password === "ALPHA") {
        // Redirect to a dashboard or perform other actions upon successful login
   
        errorMessage.textContent = "";
        window.location.href = "dashboard.htm"; // Redirect to a dashboard page
    }
        if (username === "Sufyan" && password === "sufyan") {
        // Redirect to a dashboard or perform other actions upon successful login
        alert("Login successful!");
        errorMessage.textContent = "";
        window.location.href = "dashboard.htm"; // Redirect to a dashboard page
    }
    else {
        errorMessage.textContent = "Invalid username or password";
    }
}
