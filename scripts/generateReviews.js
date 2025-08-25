import { reviews } from "./reviews.js";

let reviewRender = "";
const reviewsContainer = document.querySelector(
  ".js-reviews-grid"
);

export function generateReviews() {
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
      <div class="review-card js-review-card" role="listitem">
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
