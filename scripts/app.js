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
        <div class="feature-card js-feature-card">
            <img 
              src=${feature.icon} 
              alt="${feature.title} icon"
              loading="lazy"
            />
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    </div>
    `;
  });

  featuresContainer.innerHTML = featuresRender;
}

function generateReviews() {
  const defaultStarCount = 4;
  reviews.forEach((review) => {
    const starImages = Array(defaultStarCount)
      .fill()
      .map(
        () =>
          `<img src="${review.star}" alt="Star" loading="lazy" />`
      )
      .join("");
    reviewRender += `
      <div class="review-card" role="listitem">
        <div class="portrait-section">
          <img
            class="avatar"
            src="${review.portrait}"
            alt="Portrait of ${review.person}"
            loading="lazy"
          />
          <div class="name-occupation">
            <p class="name">${review.person}</p>
            <p class="occupation">${review.title}</p>
          </div>
        </div>
        <div class="review-text">
          <p>${review.feedback}</p>
        </div>
        <div class="ratings" aria-label="Rating: 4 out of 5 stars">
          ${starImages}
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

document.addEventListener("DOMContentLoaded", () => {
  generateFeatures();
  generateReviews();
  generatePricing();
});
