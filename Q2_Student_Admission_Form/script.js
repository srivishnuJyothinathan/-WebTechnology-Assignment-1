document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent =
        "Application submitted successfully for demonstration.";
});
