const burgerMenu = document.querySelector('.header-container__nav__mobile-burger-menu');
const menu = document.querySelector('.header-container__nav--mobile');
const btnClose = document.querySelector('.header-container__nav--mobile__active__btn-close')

burgerMenu.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('header-container__nav--mobile__active');
})

btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.remove('header-container__nav--mobile__active');
})