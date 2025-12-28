document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const navButtons = document.querySelectorAll(".header__elements__btn");
  const nav = document.querySelector(".header__elements__nav");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      nav.classList.toggle("active");
      body.classList.toggle("overflow");
    });
  });
});
