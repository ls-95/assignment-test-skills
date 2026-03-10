const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("navbar-pages");
const form = document.getElementById("form");
const input = document.getElementById("search");
const exploreBtn = document.getElementById("explore");
const bookOneBtn = document.getElementById("book-one");
const bookTwoBtn = document.getElementById("book-two");

bookOneBtn.addEventListener("click", function () {
  alert("You want to book now!");
});

bookTwoBtn.addEventListener("click", function () {
  alert("You want to book now!");
});

exploreBtn.addEventListener("click", function () {
  alert("You want to explore places!");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`You have searched for "${input.value}"!`);
});

btn.addEventListener("click", function () {
  menu.classList.toggle("is-open");
});
