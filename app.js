//Hero slider
const heroSlides =  document.querySelector('.hero-slides');

const heroButtonOne = document.querySelector('.hero-slide_button_1');
heroButtonOne.addEventListener('click', slideOne);
function slideOne(){
    heroButtonOne.classList.add('active');
    heroButtonTwo.classList.remove('active');

    heroSlides.style.marginLeft = 0;
}

const heroButtonTwo = document.querySelector('.hero-slide_button_2');
heroButtonTwo.addEventListener('click', slideTwo);
function slideTwo(){
    heroButtonOne.classList.remove('active');
    heroButtonTwo.classList.add('active');

    heroSlides.style.marginLeft = '-100%';
}

//About
const aboutTextOne =  document.querySelector('.about-target_text_1');
const aboutTextTwo =  document.querySelector('.about-target_text_2');

const aboutButtonOne = document.querySelector('.about-button_1');
aboutButtonOne.addEventListener('click', aboutOne);

function aboutOne(){
    aboutButtonOne.classList.add('active');
    aboutTextOne.classList.add('active');

    aboutTextTwo.classList.remove('active');
    aboutButtonTwo.classList.remove('active');

    aboutSlide.style.marginLeft = 0;
}

const aboutButtonTwo = document.querySelector('.about-button_2');
aboutButtonTwo.addEventListener('click', aboutTwo);

function aboutTwo(){
    aboutButtonOne.classList.remove('active');
    aboutTextOne.classList.remove('active');

    aboutTextTwo.classList.add('active');
    aboutButtonTwo.classList.add('active');

    aboutSlide.style.marginLeft = '-100%';
}

const aboutSlide =  document.querySelector('.block-content_2_targets');