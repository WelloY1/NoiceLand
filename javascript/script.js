const navMobile = document.querySelector(".all-header");

document.querySelector('.menu-icon-wrapper').onclick = function() {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    navMobile.classList.toggle("nav__mobile");
}


