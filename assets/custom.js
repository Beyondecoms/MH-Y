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
});