let burger = document.querySelector('.header-nav__burger');
let mobileMenu = document.querySelector('.header-inner');
let navLink = document.querySelectorAll('.nav-item');

burger.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle("header-nav__burger__active");
    if (this.classList.contains("header-nav__burger__active")) {
        mobileMenu.classList.add("header-inner__active");

    } else {
        mobileMenu.classList.remove("header-inner__active");
    }
})

for (key of navLink) {
    key.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.remove('header-inner__active');
        burger.classList.remove('header-nav__burger__active');
    })
}