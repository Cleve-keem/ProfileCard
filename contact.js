const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const errors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Validation rules
  if (name.value.trim() === "") errors.name = "Full name is required.";
  if (email.value.trim() === "") {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = "Please enter a valid email (e.g., name@example.com).";
  }
  if (subject.value.trim() === "") errors.subject = "Subject is required.";
  if (message.value.trim().length < 10)
    errors.message = "Message must be at least 10 characters long.";

  // Display errors
  for (const field in errors) {
    const errorEl = document.querySelector(
      `[data-testid="test-contact-error-${field}"]`
    );
    errorEl.textContent = errors[field];
  }

  // Success state
  const hasErrors = Object.values(errors).some((msg) => msg !== "");
  if (!hasErrors) {
    successMsg.hidden = false;
    form.reset();
  } else {
    successMsg.hidden = true;
  }
});
