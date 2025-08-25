import { generateFeatures } from "./generateFeatures.js";
import { generateReviews } from "./generateReviews.js";
import { generateMarquees } from "./generateMarquees.js";
import { generatePricing } from "./generatePricing.js";

const hamburger = document.querySelector(".js-hamburger");
const sidebar = document.querySelector("#sidebar");
const closeButton = document.querySelector(
  "#close-sidebar"
);

function toggleSidebar() {
  sidebar.classList.toggle("open");
  hamburger.classList.toggle("hamburger-active");
  console.log("clicked");
}

hamburger.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);

document.addEventListener("DOMContentLoaded", () => {
  generateFeatures();
  generateReviews();
  generatePricing();
  generateMarquees();
});
