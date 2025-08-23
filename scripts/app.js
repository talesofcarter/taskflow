import { features } from "./features.js";
import { reviews } from "./reviews.js";
import { pricing } from "./pricing.js";

let featuresRender = "";
let reviewRender = "";
let pricingRender = "";

const featuresContainer = document.querySelector(
  ".js-features-grid"
);
const reviewsContainer = document.querySelector(
  ".js-reviews-grid"
);
const pricingContainer = document.querySelector(
  ".js-pricing-grid"
);

function generateFeatures() {
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

  featuresContainer.innerHTML = featuresRender;
}

function generateReviews() {
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
  reviewsContainer.innerHTML = reviewRender;
}

function generatePricing() {
  pricing.forEach((entry) => {
    const perksHTML = entry.perks
      .map(
        (perk) => `
      <div class="perk-micro-container">
        <img
          src="assets/icons/check-mark.svg"
          alt=""
        />
        <span class="item-perk"
          >${perk}
        </span>
      </div>`
      )
      .join("");

    const priceText =
      entry.price === 0 ? "$0" : `$${entry.price}`;
    const cardCard =
      entry.category === "Standard"
        ? "pricing-card standard-plan"
        : "pricing-card";

    pricingRender += `
    <div class="${cardCard}">
      <div class="pricing-label">
        <h1 class="">${entry.category}</h1>
        <p>${entry.audience}</p>
      </div>
      <hr />
      <div class="pricing-perks">
        <div class="price-value-section">
          <span class="price">${priceText}</span>
          <span class="per-month">/ month</span>
        </div>
        <div>
        ${perksHTML}
        </div>
      </div>
      <button class="purchase-btn">Purchase</button>
    </div>
      `;
  });
  pricingContainer.innerHTML = pricingRender;
}

generateFeatures();
generateReviews();
generatePricing();
