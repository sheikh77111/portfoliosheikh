document.getElementById("submit-form").addEventListener("submit", async function(event) {
  event.preventDefault();
  if (validateForm()) {
    try {
      const formData = new FormData(this);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email: " + result.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  }
});
