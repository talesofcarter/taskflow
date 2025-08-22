import { features } from "./features.js";

let featuresRender = "";

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
console.log(featuresRender);
document.querySelector(".js-features-grid").innerHTML =
  featuresRender;
