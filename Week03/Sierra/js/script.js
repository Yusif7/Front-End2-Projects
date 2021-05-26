/* Burger icon */
/* document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header__nav ul').classList.toggle('active');
}) */

$(document).ready(() => {
    $('.burger').on('click', () => {

        $('.header__nav ul').css('transition', 'all 0.6s ease 0s;');
        $('.header__nav ul').toggleClass('active');
    })
})