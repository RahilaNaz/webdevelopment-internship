document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Hide the form
    document.getElementById("signup-form").style.display = "none";
    
    // Show the thank-you message
    document.getElementById("thank-you-message").innerHTML = `
        <h2>Thank you for your submission!</h2>
        <p>We’ll contact you soon.</p>
    `;
    document.getElementById("thank-you-message").style.display = "block";
});
