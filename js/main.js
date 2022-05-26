var elButton = document.querySelector('.header__button')
var elMenu = document.querySelector('.header__menu')

elButton.addEventListener('click', function () {
	elMenu.classList.toggle('header__menu--open')
})