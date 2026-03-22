export function initScroll() {
  const boxes = document.querySelectorAll(".hidden");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  boxes.forEach((box) => {
    obs.observe(box);
  });
}