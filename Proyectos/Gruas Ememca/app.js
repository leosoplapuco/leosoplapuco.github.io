//AppData
const emailOne = 'correo@gruasememca.com';
const numberOne = 998877665;
const numberTwo = 998877665;
const ubi = 'Lurín, Lima - Perú';

const emailOneTags = document.querySelectorAll(".email-one");
emailOneTags.forEach((emailOneTags) => {
    emailOneTags.innerHTML = emailOne;
});

const numberOneTags = document.querySelectorAll(".number-one");
numberOneTags.forEach((numberOneTags) => {
    numberOneTags.innerHTML = numberOne;
});

const numberTwoTags = document.querySelectorAll(".number-two");
numberTwoTags.forEach((numberTwoTags) => {
    numberTwoTags.innerHTML = numberTwo;
});

const ubicationTags = document.querySelectorAll(".ubication");
ubicationTags.forEach((ubicationTags) => {
    ubicationTags.innerHTML = ubi;
});

//HeaderScrollAnimation
const header =  document.querySelector('header');
const heroOne = document.querySelector('.hero-1');

window.addEventListener('scroll', Scroll);
function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 200){
        header.classList.add('active');
        heroOne.classList.add('active');
    }else{
        header.classList.remove('active');
        heroOne.classList.remove('active');
    }
}

//HamburguerAnimation
const hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListener('click', menuActive);

const lineOne = document.querySelector('.line-1');
const lineTwo = document.querySelector('.line-2');
const lineThree = document.querySelector('.line-3');

const nav =  document.querySelector('nav');

function menuActive(){
    header.classList.add('active');

    lineOne.classList.toggle('active');
    lineTwo.classList.toggle('active');
    lineThree.classList.toggle('active');

    nav.classList.toggle('active');
}

//ProyectsSlider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

//GalleryApp