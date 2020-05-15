const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const cross = document.querySelector(".toggle i");
const modal = document.getElementById("modal");

const selectElement = (element) => document.querySelector(element);

const body = document.querySelector("body");
const header = selectElement("header");

// Toggle Nav
toggle.addEventListener("click", () => {
  body.classList.toggle("show-nav");

  if (cross.className === "fa fa-bars fa-2x") {
    cross.className = "fas fa-times fa-2x";
  } else {
    cross.className = "fa fa-bars fa-2x";
  }
});

// Show modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// Hide Modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// window.addEventListener("click", (e) => {
//   e.target == body || e.target == header ? body.classList.remove("show-nav") : false;
// });

window.addEventListener("click", (event) => {
  if (event.target == body || event.target == header) {
    body.classList.remove("show-nav");
  }
});

// Hide modal on outside click
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
