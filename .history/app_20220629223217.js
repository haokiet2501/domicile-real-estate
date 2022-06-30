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
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data-subtitle, .category__title`, 
{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.home__data-title, .home__button, .futured__properties, .futured__container, 
        .futured__card, .category__subtitle, .blog__card-one, .blog__card-two, 
        .blog__card-three
        `,{
    origin: 'bottom',
    interval: 120,
})

sr.reveal(`.home__images, .testimonial__subtitle`, {
    origin: 'left',
    interval: 100,
})

sr.reveal(`.category__one, .category__two, .category__three, .swiper`, {
    origin: 'right',
    interval: 100,
})


