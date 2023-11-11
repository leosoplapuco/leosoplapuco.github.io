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

window.addEventListener('scroll', Scroll);
function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 200){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
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
const proyects = document.querySelector('.proyects')
const proyectButtonOne = document.querySelector('.proyects-button_1');
proyectButtonOne.addEventListener('click', proyectsOne);

function proyectsOne(){
    proyects.style.marginLeft = 0;
    proyectButtonOne.classList.add('active');
    proyectButtonTwo.classList.remove('active');
    proyectButtonThree.classList.remove('active');
}

const proyectButtonTwo = document.querySelector('.proyects-button_2');
proyectButtonTwo.addEventListener('click', proyectsTwo);

function proyectsTwo(){
    proyects.style.marginLeft = '-100%';
    proyectButtonOne.classList.remove('active');
    proyectButtonTwo.classList.add('active');
    proyectButtonThree.classList.remove('active');
}

const proyectButtonThree = document.querySelector('.proyects-button_3');
proyectButtonThree.addEventListener('click', proyectsThree);

function proyectsThree(){
    proyects.style.marginLeft = '-200%';
    proyectButtonOne.classList.remove('active');
    proyectButtonTwo.classList.remove('active');
    proyectButtonThree.classList.add('active');
}

//GalleryApp
// const gallery = document.querySelector('.gallery');
// const modal = document.querySelector('.modal');
// const modalImg = document.querySelector('.modal-content');
// const closeBtn = document.querySelector('.close');

// gallery.addEventListener('click', e => {
//     if (e.target.tagName === 'IMG') {
//         modal.style.display = 'block';
//         modalImg.src = e.target.src;
//     }
// });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

//Menu
// let linkService = document.querySelector('.nav-li_submenu-1');
// linkService.addEventListener('mouseover', serviceSubMenu);

// let subMenuService = document.querySelector('.sub-menu')

// function serviceSubMenu(){
//     subMenuService.classList.add('active')
// }