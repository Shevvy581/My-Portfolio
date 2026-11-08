const emailButton = document.querySelector("#email-button");
const emailMessage = document.querySelector("#email-message");

emailButton.addEventListener("click", function() {
  emailMessage.textContent =
    "Thanks for reaching out! Your email app should open now.";
});
// Typing Effect

const heroText = document.querySelector(".hero p:not(.hero-label)");

const text = "I create clean, useful, and professional websites for businesses and individuals.";

let index = 0;

function typeText() {
  if (index < text.length) {
    heroText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 40);
  }
}

heroText.textContent = "";
typeText();
// Dark Mode

const darkModeButton = document.querySelector("#dark-mode-button");

// Check if Dark Mode was enabled before
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeButton.textContent = "☀️ Light Mode";
}

darkModeButton.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    darkModeButton.textContent = "☀️ Light Mode";

    localStorage.setItem("darkMode", "enabled");

  } else {

    darkModeButton.textContent = "🌙 Dark Mode";

    localStorage.setItem("darkMode", "disabled");

  }

});
// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

 if (entry.isIntersecting) {
  entry.target.classList.add("show");
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
}

  });
});

hiddenElements.forEach((element) => {
  element.classList.add("hidden");
  observer.observe(element);
});