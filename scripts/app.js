import { features } from "./features.js";
import { reviews } from "./reviews.js";

let featuresRender = "";
let reviewRender = "";

features.forEach((feature) => {
  featuresRender += `
    <div class="features-grid">
        <div class="feature-card">
            <img src=${feature.icon} alt="" />
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    </div>
    `;
});

reviews.forEach((review) => {
  reviewRender += `
  <div class="reviews-grid js-reviews-grid">
    <div class="review-card">
      <div class="portrait-section">
        <img
          class="avatar"
          src=${review.portrait}
          alt=""
        />
        <div class="name-occupation">
          <p class="name">${review.person}</p>
          <p class="occupation">
            ${review.title}
          </p>
        </div>
      </div>
      <div class="review-text">
        <p>
          ${review.feedback}
        </p>
      </div>
      <div class="ratings">
        <img src="assets/icons/star.svg" alt="" />
        <img src="assets/icons/star.svg" alt="" />
        <img src="assets/icons/star.svg" alt="" />
        <img src="assets/icons/star.svg" alt="" />
      </div>
    </div>
  </div>
  `;
});

document.querySelector(".js-features-grid").innerHTML =
  featuresRender;

document.querySelector(".js-reviews-grid").innerHTML =
  reviewRender;
