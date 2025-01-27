const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.closest(".faq-item");
    faqItem.classList.toggle("open");
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const zipCode = document.getElementById("zipCode").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("ZIP Code:", zipCode);
    console.log("Contact Info:", contact);
    console.log("Message:", message);

    window.location.href = "thank-you.html";
  });
