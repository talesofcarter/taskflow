import { pricing } from "./pricing.js";

let pricingRender = "";
const pricingContainer = document.querySelector(
  ".js-pricing-grid"
);

export function generatePricing() {
  pricing.forEach((entry) => {
    const perksHTML = entry.perks
      .map(
        (perk) => `
      <div class="perk-micro-container">
        <img
          src="assets/icons/check-mark.svg"
          alt="Checkmark"
          loading="lazy"
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
      <button class="purchase-btn" aria-label="Purchase ${entry.category} Plan">Purchase</button>
    </div>
      `;
  });
  pricingContainer.innerHTML = pricingRender;
}
