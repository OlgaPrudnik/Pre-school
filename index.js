console.log("ругается на ссылки и не придерживался perfectPixel ")



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
