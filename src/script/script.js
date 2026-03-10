const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("navbar-pages");

btn.addEventListener("click", function () {
  menu.classList.toggle("is-open");
});
