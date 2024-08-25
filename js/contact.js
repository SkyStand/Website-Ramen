document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      messageInput.value.trim() === ""
    ) {
      errorMessage.style.display = "block";
      return;
    }

    if (!validateEmail(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
      return;
    }

    simulateFormSubmission();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function simulateFormSubmission() {
    successMessage.style.display = "block";

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
