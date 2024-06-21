//Header
const Header = document.querySelector('header');

window.addEventListener('scroll', Scroll);
function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 50){
        HeaderActive();
        MenuIcon.classList.add('active')
    }else{
        HeaderDesactive();
        SubHeaderUsDesactive();
        SubHeaderServicesDesactive();
        MenuIcon.classList.remove('active');
        MenuDesactive();
    }
}

function HeaderActive(){
    Header.classList.add('active');
}

function HeaderDesactive(){
    Header.classList.remove('active');
}

//Menu
const MenuIcon = document.querySelector('.menu-icon');
MenuIcon.addEventListener('click', MenuActive);

function MenuActive(){
    Menu.classList.toggle('active')
    MenuIcon.classList.toggle('reactive')
}

function MenuDesactive(){
    Menu.classList.remove('active')
    MenuIcon.classList.remove('reactive')
}

const Menu = document.querySelector('.menu-container');

//SubHeader
const LinkUs = document.querySelector('.link-2');
const LinkServices = document.querySelector('.link-3');

const SubHeaderUs = document.querySelector('.sub-header-container-1');
const SubHeaderServices = document.querySelector('.sub-header-container-2');

LinkUs.addEventListener('click', SubHeaderUsActive);
function SubHeaderUsActive(){
    LinkUs.classList.toggle('active');
    SubHeaderUs.classList.toggle('active');

    LinkServices.classList.remove('active');
    SubHeaderServices.classList.remove('active');

    Header.classList.add('active')
}

function SubHeaderUsDesactive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');

    LinkServices.classList.remove('active');
    SubHeaderServices.classList.remove('active');
}

LinkServices.addEventListener('click', SubHeaderServicesActive);
function SubHeaderServicesActive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');

    LinkServices.classList.toggle('active');
    SubHeaderServices.classList.toggle('active');

    Header.classList.add('active')
}

function SubHeaderServicesDesactive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');

    LinkServices.classList.remove('active');
    SubHeaderServices.classList.remove('active');
}