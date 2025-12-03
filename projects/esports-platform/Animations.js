document.addEventListener("DOMContentLoaded", () => {
  const fadeIn = (el) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transform = "translateY(10px)";
    requestAnimationFrame(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  };

  // Animate cards when content switches
  const animateCards = () => {
    const cards = document.querySelectorAll(".content.active .card");
    cards.forEach((card, i) => {
      setTimeout(() => fadeIn(card), i * 100);
    });
  };

  const animateTabSwitch = () => {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        setTimeout(() => {
          animateCards();
        }, 50);
      });
    });
  };

  animateCards();
  animateTabSwitch();
});
