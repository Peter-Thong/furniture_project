const navSlide = () => {
  const burger = document.querySelector(".navigation__burger");
  const nav = document.querySelector(".navigation__list");
  const navLinks = document.querySelectorAll(".navigation__item");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navigation-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("navigation__burger--toggle");
  });
};

navSlide();
