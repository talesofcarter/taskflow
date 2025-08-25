import { logos } from "./logos.js";

let marqueeRender = "";
const marqueeContainer = document.querySelector(
  ".js-marquee-content"
);

export function generateMarquees() {
  logos.concat(logos).forEach((logo) => {
    marqueeRender += `
    <img
      src="${logo.src}"
      alt="${logo.alt}"
      class="item"
      loading="lazy"
    />
    `;
  });
  marqueeContainer.innerHTML = marqueeRender;
}
