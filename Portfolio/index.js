const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__nav')
const ul = document.querySelector(".header__nav")
burger.addEventListener("click", () => {

	burger.classList.toggle("burger-active")
	nav.classList.toggle("header__nav__active")

})

ul.addEventListener('click', (event) => {
	// burger.classList.remove("burger-active")
	burger.classList.toggle("burger-active")
	nav.classList.toggle("header__nav__active")

console.log(event.target)
})
const portfolioBtns = document.querySelector(".portfolio__main");
const portfolioBtn = document.querySelectorAll(".portfolioBtn");
const portfolioImages = document.querySelectorAll(".image");

const changeImage = function changeImage(event) {
  if (event.target.classList.contains("portfolioBtn")) {
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `../img/${event.target.dataset.season}/${
          index + 1
        }.jpg`)
    );
    portfolioBtn.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
  }
};

portfolioBtns.addEventListener("click", changeImage);

import i18Obj from "./translator.js";

const ruLang = document.querySelector(".ru");
const enLang = document.querySelector(".en");

function getTranslate(lang) {
  const language = document.querySelectorAll("[data-i18]");
  language.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];
  });
}

ruLang.addEventListener("click", () => {
  getTranslate("ru");
});
enLang.addEventListener("click", () => {
  getTranslate("en");
});
