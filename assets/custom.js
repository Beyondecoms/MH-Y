document.addEventListener("DOMContentLoaded", function () {
  // Ensure the first tab is active by default
  const activeItems = document.querySelectorAll(".accordion > .accordion-item.is-active");
  activeItems.forEach((item) => {
    const panel = item.querySelector(".accordion-panel");
    if (panel) panel.style.display = "block";
  });

  // Add click event listener to all accordion items
  const accordionItems = document.querySelectorAll(".accordion > .accordion-item");
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Close all other panels
      accordionItems.forEach((sibling) => {
        if (sibling !== this) {
          sibling.classList.remove("is-active");
          const siblingPanel = sibling.querySelector(".accordion-panel");
          if (siblingPanel) siblingPanel.style.display = "none";
        }
      });

      // Toggle the clicked panel
      const panel = this.querySelector(".accordion-panel");
      if (panel) {
        const isActive = this.classList.toggle("is-active");
        panel.style.display = isActive ? "block" : "none";
      }
    });
  });

  // Autoplay video only when in viewport using IntersectionObserver
  const videoEls = document.querySelectorAll('.video-container video, .video-section1 video, .custom-shop--video-container video, .section-video, .js-video');
  if (videoEls.length > 0 && 'IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.3 });
    videoEls.forEach(video => videoObserver.observe(video));
  }
});