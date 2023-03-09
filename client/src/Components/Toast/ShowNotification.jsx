
import './showNotification.css'


export function ShowNotification(type, title, message, duration) {
  const notificationContainer = document.createElement("div");
  const notificationIcon = document.createElement("span");
  const notificationTitle = document.createElement("h4");
  const notificationMessage = document.createElement("span");
  const notificationCloseButton = document.createElement("button");

  // Set icon and class based on type
  let notificationClass = "";
  let notificationIconHTML = "";
  switch (type) {
    case "success":
      notificationClass = "notification success";
      notificationIconHTML = "&#x2713;"; // Checkmark (✓)
      break;
    case "warning":
      notificationClass = "notification warning";
      notificationIconHTML = "&#9888;"; // Warning symbol (⚠)
      break;
    case "error":
      notificationClass = "notification error";
      notificationIconHTML = "&#10005;"; // X symbol (✕)
      break;
    case "info":
      notificationClass = "notification info";
      notificationIconHTML = "&#8505;"; // Information symbol (ℹ)
      break;
    default:
      notificationClass = "notification success";
      notificationIconHTML = "&#x2713;"; // Checkmark (✓)
  }

  // Assign classes and content to created elements
  notificationContainer.className = notificationClass;
  notificationIcon.innerHTML = notificationIconHTML;
  notificationTitle.textContent = title;
  notificationMessage.textContent = message;
  notificationCloseButton.innerHTML = "&times;";

  // Add elements to notification container
  notificationContainer.appendChild(notificationIcon);
  const textContainer = document.createElement("div");
  textContainer.className = "text-container";
  textContainer.appendChild(notificationTitle);
  textContainer.appendChild(notificationMessage);
  notificationContainer.appendChild(textContainer);
  notificationContainer.appendChild(notificationCloseButton);

  // Add notification to document body
  document.body.appendChild(notificationContainer);

  // Set timer to remove notification after duration
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, duration);

  // Add event listener to close button
  notificationCloseButton.addEventListener("click", () => {
    document.body.removeChild(notificationContainer);
  });
}























