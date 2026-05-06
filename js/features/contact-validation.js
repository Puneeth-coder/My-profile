function initContactValidation() {
    const contactForm = document.getElementById("contact-form");
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const contactMessage = document.getElementById("contact-message");
    const formMessage = document.getElementById("form-message");
    const cancelBtn = document.getElementById("form-cancel");

    if (!contactForm || !contactName || !contactEmail || !contactMessage || !formMessage) {
        console.log("Contact form elements not found");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactName.value.trim();
        const email = contactEmail.value.trim();
        const message = contactMessage.value.trim();

        formMessage.textContent = "";
        formMessage.className = "text-sm text-center";

        // ✅ NAME VALIDATION
        if (name === "") {
            showError("Name is required", contactName);
            return;
        }

        if (name.length < 3) {
            showError("Name must be at least 3 characters", contactName);
            return;
        }

        // ✅ EMAIL VALIDATION
        if (email === "") {
            showError("Email is required", contactEmail);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError("Enter a valid email", contactEmail);
            return;
        }

        // ✅ MESSAGE VALIDATION
        if (message === "") {
            showError("Message cannot be empty", contactMessage);
            return;
        }

        if (message.length < 10) {
            showError("Message must be at least 10 characters", contactMessage);
            return;
        }

        // ✅ SUCCESS
        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.classList.add("text-green-600");

        console.log("Form Data:", { name, email, message });

        contactForm.reset();
    });

    // 🔁 CLEAR MESSAGE ON INPUT
    [contactName, contactEmail, contactMessage].forEach(input => {
        input.addEventListener("input", () => {
            formMessage.textContent = "";
        });
    });

    // ❌ CANCEL BUTTON
    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            contactForm.reset();
            formMessage.textContent = "";
        });
    }

    // 🔥 HELPER FUNCTION
    function showError(message, inputField) {
        formMessage.textContent = message;
        formMessage.classList.add("text-red-500");
        inputField.focus();
    }
}

// CALL FUNCTION
initContactValidation();