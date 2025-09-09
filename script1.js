// Smooth scrolling highlight

const navLinks = document.querySelectorAll("nav ul li a");



navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(l => l.classList.remove("active"));

    link.classList.add("active");

  });

});



// Contact form (dummy submit)

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thanks! Your message has been sent.");

  form.reset();

});