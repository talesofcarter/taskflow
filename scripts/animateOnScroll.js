export function animateOnScroll(
  selector = ".js-review-card",
  options = {}
) {
  const elements = document.querySelectorAll(selector);
  const defaultOptions = {
    threshold: 0.1,
    className: "visible",
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            observerOptions.className
          );
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: observerOptions.threshold,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}
