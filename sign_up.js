const API_URL = "https://ding-ggzr.onrender.com";

document.getElementById("userForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to register");
        }

        document.getElementById("successMessage").innerText = "Sign-up successful! Redirecting...";
        setTimeout(() => { window.location.href = "home.html"; }, 2000);
    } catch (error) {
        console.error("Sign-up Error:", error);
        document.getElementById("errorMessage").innerText = error.message;
    }
});
