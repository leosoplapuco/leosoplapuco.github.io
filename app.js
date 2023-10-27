//MenuIconAnimation
const hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)

const lineOne = document.querySelector('.line-1')
const lineTwo = document.querySelector('.line-2')
const lineThree = document.querySelector('.line-3')
const lineFour = document.querySelector('.line-4')

function menuActive(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')
}

//Notification
// const notificationButton = document.querySelector('.notification');
// notificationButton.addEventListener('click', notificationActive)

// const notificationContainer = document.querySelector('.notifications-container')

// function notificationActive(){
//     notificationContainer.classList.add('active')
// }

// const notificationCloseButton = document.querySelector('.notification-close');
// notificationCloseButton.addEventListener('click', notificationDesactive)

// function notificationDesactive(){
//     notificationContainer.classList.remove('active')
// }

//HeroSlides
const slideHero = document.querySelector('.hero-targets_slides');

const slideButtonOne = document.querySelector('.hero-targets_button-1');
slideButtonOne.addEventListener('click', slideOne);

function slideOne(){
    slideHero.style.marginLeft = 0;

    slideButtonOne.classList.add('active');
    slideButtonTwo.classList.remove('active');
    slideButtonThree.classList.remove('active');
}

const slideButtonTwo = document.querySelector('.hero-targets_button-2');
slideButtonTwo.addEventListener('click', slideTwo);

function slideTwo(){
    slideHero.style.marginLeft = '-100%';

    slideButtonOne.classList.remove('active');
    slideButtonTwo.classList.add('active');
    slideButtonThree.classList.remove('active');
}

const slideButtonThree = document.querySelector('.hero-targets_button-3');
slideButtonThree.addEventListener('click', slideThree);

function slideThree(){
    slideHero.style.marginLeft = '-200%';

    slideButtonOne.classList.remove('active');
    slideButtonTwo.classList.remove('active');
    slideButtonThree.classList.add('active');
}

//About
const aboutButtonOne = document.querySelector('.about-button_1');
aboutButtonOne.addEventListener('click', aboutOne)

const aboutButtonTwo = document.querySelector('.about-button_2');
aboutButtonTwo.addEventListener('click', aboutTwo)

const aboutTargets = document.querySelector('.about-targets')

function aboutOne(){
    aboutTargets.classList.remove('active');
    aboutButtonOne.classList.add('active');
    aboutButtonTwo.classList.remove('active');
}

function aboutTwo(){
    aboutTargets.classList.add('active');
    aboutButtonOne.classList.remove('active');
    aboutButtonTwo.classList.add('active');
}

//Contact
// const modalThanks = document.querySelector('.thanksContainer')
// function thanksActive(){
//     thanks.classList.add('thanksContainer__active')
// }

// closeThanks = document.querySelector('.closeThanks')
// closeThanks.addEventListener('click', function(){
//     thanks.classList.remove('thanksContainer__active')
// })

// const $form = document.querySelector('#form')
// $form.addEventListener('submit', handleSubmit)
// async function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers:{
//             'Accept': 'aplication/json'
//         }
//     })
//     if (response.ok){
//         this.reset()
//         thanksActive()
//     }
// }