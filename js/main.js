var elButton = document.querySelector('.btn__one')
var elMenu = document.querySelector('.header__menu')

elButton.addEventListener('click', function () {
	elMenu.classList.toggle('header__menu--open')
})