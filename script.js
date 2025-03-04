// Privacy Policy Popup

const privacyButton = document.querySelector(".footer-btn");
const privacyPopupContainer = document.getElementById(
  "privacy-popup-container"
);
const closePrivacyPopup = document.getElementById("close-privacy-popup");
const privacyOkayButton = document.querySelector(".privacy-okay-btn");

privacyPopupContainer.style.display = "flex";

if (privacyButton && privacyPopupContainer) {
  privacyButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (privacyPopupContainer.style.display === "flex") {
      privacyPopupContainer.style.display = "none";
    } else {
      privacyPopupContainer.style.display = "flex";
    }
  });
}

if (closePrivacyPopup && privacyPopupContainer) {
  closePrivacyPopup.addEventListener("click", (event) => {
    event.stopPropagation();
    privacyPopupContainer.style.display = "none";
  });
}

if (privacyOkayButton && privacyPopupContainer) {
  privacyOkayButton.addEventListener("click", (event) => {
    event.stopPropagation();
    privacyPopupContainer.style.display = "none";
  });
}

if (privacyPopupContainer) {
  document.addEventListener("click", (event) => {
    if (
      privacyPopupContainer.style.display === "flex" &&
      !event.target.closest(".privacy-popup-content") &&
      !event.target.closest(".footer-btn") &&
      !event.target.closest("#close-privacy-popup") &&
      !event.target.closest(".privacy-okay-btn")
    ) {
      privacyPopupContainer.style.display = "none";
    }
  });
}

// Message Sent Popup

const messageButton = document.querySelector(".contact-btn2");
const messageSentPopupContainer = document.getElementById(
  "message-sent-popup-container"
);
const closeMessagePopup = document.getElementById("close-message-popup");
const messageOkayButton = document.querySelector(".message-okay-btn");

messageSentPopupContainer.style.display = "none";

if (messageButton && messageSentPopupContainer) {
  messageButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (messageSentPopupContainer.style.display === "flex") {
      messageSentPopupContainer.style.display = "none";
    } else {
      messageSentPopupContainer.style.display = "flex";
    }
  });
}

if (closeMessagePopup && messageSentPopupContainer) {
  closeMessagePopup.addEventListener("click", (event) => {
    event.stopPropagation();
    messageSentPopupContainer.style.display = "none";
  });
}

if (messageOkayButton && messageSentPopupContainer) {
  messageOkayButton.addEventListener("click", (event) => {
    event.stopPropagation();
    messageSentPopupContainer.style.display = "none";
  });
}

if (messageSentPopupContainer) {
  document.addEventListener("click", (event) => {
    if (
      messageSentPopupContainer.style.display === "flex" &&
      !event.target.closest(".message-popup-content") &&
      !event.target.closest("#close-message-popup") &&
      !event.target.closest(".message-okay-btn")
    ) {
      messageSentPopupContainer.style.display = "none";
    }
  });
}

// Contact Form API

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById("form-message");

    const fullName = form.querySelector("#full-name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!fullName || !email || !message) {
      messageDiv.textContent = "Please fill out all required fields.";
      messageDiv.className = "form-message error";
      messageDiv.style.display = "block";
      return;
    }

    if (!validateEmail(email)) {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.className = "form-message error";
      messageDiv.style.display = "block";
      return;
    }

    console.log("Contact form script loaded!");

    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submission intercepted!");

        const form = event.target;
        const formData = new FormData(form);

        const fullName = form.querySelector("#full-name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (!fullName || !email || !message) {
          console.log("Please fill out all required fields.");
          return;
        }

        if (!validateEmail(email)) {
          console.log("Please enter a valid email address.");
          return;
        }

        fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              console.log("Form submitted successfully!");
              form.reset();
            } else {
              console.log("Failed to send message. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
