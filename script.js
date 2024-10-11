function shareOpenDay() {
    const shareText = "I'm attending the Open Day at St Mary’s University. Would you like to join me?"; // Share message
    const url = "YOUR_OPEN_DAY_PAGE_URL"; // Replace with your actual Open Day page URL
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`;
    
    window.open(shareUrl, "_blank"); // Open the share URL in a new tab
}

function registerOpenDay() {
    const registrationUrl = "YOUR_REGISTRATION_PAGE_URL"; // Replace with your actual registration page URL
    window.location.href = registrationUrl; // Redirect to the registration page
}
