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

document.addEventListener("DOMContentLoaded", function () {
  const messageSentPopupContainer = document.getElementById(
    "message-sent-popup-container"
  );
  const closeMessagePopup = document.getElementById("close-message-popup");
  const messageOkayButton = document.querySelector(".message-okay-btn");

  if (messageSentPopupContainer) {
    messageSentPopupContainer.style.display = "none";
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

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const messageDiv = document.getElementById("form-message");

      const fullName = contactForm.querySelector("#full-name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const message = contactForm.querySelector("#message").value.trim();

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

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
        redirect: "manual",
      })
        .then((response) => {
          if (response.ok || response.type === "opaqueredirect") {
            messageSentPopupContainer.style.display = "flex";
            contactForm.reset();
            messageDiv.style.display = "none";
          } else {
            messageDiv.textContent =
              "Failed to send message. Please try again.";
            messageDiv.className = "form-message error";
            messageDiv.style.display = "block";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          messageDiv.textContent = "An error occurred. Please try again.";
          messageDiv.className = "form-message error";
          messageDiv.style.display = "block";
        });
    });
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
