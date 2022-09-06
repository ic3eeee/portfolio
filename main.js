'user strict';

const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('bg-color');
    } else {
        navbar.classList.remove('bg-color');
    }
});


const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});


const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});