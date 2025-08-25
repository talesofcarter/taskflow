import { features } from "./features.js";

let featuresRender = "";
const featuresContainer = document.querySelector(
  ".js-features-grid"
);

export function generateFeatures() {
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
