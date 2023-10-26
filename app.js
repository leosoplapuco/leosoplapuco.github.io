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

//About
const aboutTargetOne = document.querySelector('.about-target_1');
const aboutTargetTwo = document.querySelector('.about-target_2');
const aboutTargetThree = document.querySelector('.about-target_3');

const aboutButtonOne = document.querySelector('.about-button_1');
aboutButtonOne.addEventListener('click', aboutOne);

const aboutButtonTwo = document.querySelector('.about-button_2');
aboutButtonTwo.addEventListener('click', aboutTwo);

const aboutButtonThree = document.querySelector('.about-button_3');
aboutButtonThree.addEventListener('click', aboutThree);

function aboutOne(){
    aboutTargetOne.classList.add('active')
    aboutTargetTwo.classList.remove('active')
    aboutTargetThree.classList.remove('active')
}

function aboutTwo(){
    aboutTargetOne.classList.remove('active')
    aboutTargetTwo.classList.add('active')
    aboutTargetThree.classList.remove('active')
}

function aboutThree(){
    aboutTargetOne.classList.remove('active')
    aboutTargetTwo.classList.remove('active')
    aboutTargetThree.classList.add('active')
}