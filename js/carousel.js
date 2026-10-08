(function () {
  function visibleCount(root) {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    return 2;
  }

  function initCarousel(root) {
    const track = root.querySelector(".carousel-track");
    const prevBtn = root.querySelector(".carousel-arrow-left");
    const nextBtn = root.querySelector(".carousel-arrow-right");
    const slides = Array.from(track.children);
    if (!slides.length) return;

    let index = 0;

    function update() {
      const vc = Math.min(visibleCount(root), slides.length);
      const maxIndex = Math.max(0, slides.length - vc);
      index = Math.min(index, maxIndex);

      const slideRect = slides[0].getBoundingClientRect();
      const trackStyle = getComputedStyle(track);
      const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
      const offset = index * (slideRect.width + gap);

      track.style.transform = "translateX(-" + offset + "px)";
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index >= maxIndex;
      prevBtn.setAttribute("aria-disabled", String(prevBtn.disabled));
      nextBtn.setAttribute("aria-disabled", String(nextBtn.disabled));
    }

    prevBtn.addEventListener("click", function () {
      index = Math.max(0, index - 1);
      update();
    });

    nextBtn.addEventListener("click", function () {
      const vc = Math.min(visibleCount(root), slides.length);
      index = Math.min(slides.length - vc, index + 1);
      update();
    });

    window.addEventListener("resize", update);
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(initCarousel);
  });
})();
