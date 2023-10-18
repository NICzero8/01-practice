const menuBtn = document.querySelector('.menu-button');
const btnIcon = document.querySelector('.menu-lines');
const mobileNav = document.querySelector('.mobile-menu');


menuBtn.onclick = function () {
    btnIcon.classList.toggle('open');
    mobileNav.classList.toggle('open')
    document.body.classList.toggle('no-scroll')
}