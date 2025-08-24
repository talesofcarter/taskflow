const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("reveal");
    } else {
      entry.target.classList.remove("reveal");
    }
  });
});

const reviewElements =
  document.querySelectorAll(".feature-card");
reviewElements.forEach((el) => observer.observe(el));
