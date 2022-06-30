// Show Menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Remove menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        }
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function scrollHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__data, .category__title, .cta__container, .footer__service`)
sr.reveal(`.home__images, .home__button, .futured__card, .category__subtitle,
        .footer__company, .footer__product, .footer__media
        `, {
        delay: 600, 
        origin: 'bottom',
})

sr.reveal(`.futured__properties, .futured__card, .futured__button, .blog__card
        `, {
        delay: 500, 
        origin: 'bottom',
        interval: 100
})

sr.reveal(`.category__one, .testimonial__subtitle, .cta__data
        `, {
        delay: 500, 
        origin: 'left',
        interval: 100
})

sr.reveal(`.swiper, .cta__image
        `, {
        delay: 500, 
        origin: 'right',
        interval: 100
})