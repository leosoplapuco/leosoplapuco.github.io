//Header
const Header = document.querySelector('header');
const Menu = document.querySelector('.menu-container');

const Hamburguer = document.querySelector('.header-icon');
Hamburguer.addEventListener('click', MenuActive);

function HeaderActive(){
    Header.classList.add('active');
}

function HeaderDesactive(){
    Header.classList.remove('active');
}

function MenuActive(){
    Menu.classList.toggle('active');
    Hamburguer.classList.toggle('active');
}

function MenuDesactive(){
    Menu.classList.remove('active');
    Hamburguer.classList.remove('active');
}

window.addEventListener('scroll', Scroll);

function Scroll(){
    let ypos=window.pageYOffset;
    
    if (ypos > 50){
        HeaderActive();
    } else {
        // MenuDesactive();
        HeaderDesactive();
        LinkUsDesactive();
        LinkServicesDesactive();
    }
}

//Sub header
const LinkUs = document.querySelector('.link-1');
LinkUs.addEventListener('click', LinkUsActive);
const LinkUsSubHeader = document.querySelector('.sub-header-container-1');

function LinkUsActive(){
    HeaderActive();

    LinkUs.classList.toggle('active');
    LinkUsSubHeader.classList.toggle('active');

    LinkServices.classList.remove('active');
    LinkServicesSubHeader.classList.remove('active');
}


function LinkUsDesactive(){
    HeaderDesactive();

    LinkUs.classList.remove('active');
    LinkUsSubHeader.classList.remove('active');

    LinkServices.classList.remove('active');
    LinkServicesSubHeader.classList.remove('active');
}

const LinkServices = document.querySelector('.link-2');
LinkServices.addEventListener('click', LinkServicesActive);
const LinkServicesSubHeader = document.querySelector('.sub-header-container-2');

function LinkServicesActive(){
    HeaderActive();

    LinkUs.classList.remove('active');
    LinkUsSubHeader.classList.remove('active');

    LinkServices.classList.toggle('active');
    LinkServicesSubHeader.classList.toggle('active');
}

function LinkServicesDesactive(){
    HeaderDesactive();

    LinkUs.classList.remove('active');
    LinkUsSubHeader.classList.remove('active');

    LinkServices.classList.remove('active');
    LinkServicesSubHeader.classList.remove('active');
}

//Video demo
const VideoButton = document.querySelector('.video-demo-button');
VideoButton.addEventListener('click', VideoDemoActive);

const VideoLayer = document.querySelector('.video-layer');
VideoLayer.addEventListener('click', VideoDemoDesactive)

const VideoDemo = document.querySelector('.video-demo');

function VideoDemoActive(){
    VideoLayer.classList.add('active');
    VideoDemo.classList.add('active');
}

function VideoDemoDesactive(){
    VideoLayer.classList.remove('active');
    VideoDemo.classList.remove('active');
}

//Testimonials
// const TestimonialButtonRightToLeft = document.querySelector('.testimonial-button-2');
// TestimonialButtonRightToLeft.addEventListener('click', TestimonialRightToLeft);

// // const TestimonialButtonLeftToRight = document.querySelector('.testimonial-button-1');
// // TestimonialButtonLeftToRight.addEventListener('click', TestimonialLeftToRight);

// const Testimonials = document.querySelector('.testimonials-slider');

// function TestimonialRightToLeft(){
//     Testimonials.style.marginLeft = '-100%'
// }
