//SubHeader
const SubHeaderUs = document.querySelector('.sub-header-container-1');
const LinkUs = document.querySelector('.link-2');
LinkUs.addEventListener('click', SubHeaderUsActive);

function SubHeaderUsActive(){
    LinkUs.classList.toggle('active');
    SubHeaderUs.classList.toggle('active');

    LinkServices.classList.remove('active');
    SubHeaderServices.classList.remove('active');
}

const SubHeaderServices = document.querySelector('.sub-header-container-2');
const LinkServices = document.querySelector('.link-3');
LinkServices.addEventListener('click', SubHeaderServicesActive);

function SubHeaderServicesActive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');

    LinkServices.classList.toggle('active');
    SubHeaderServices.classList.toggle('active');
}

//Menu
const Menu = document.querySelector('.menu-container');

const MenuIcon = document.querySelector('.menu-icon');
MenuIcon.addEventListener('click', MenuActive);

function MenuActive(){
    MenuIcon.classList.toggle('active');
    Menu.classList.toggle('active');
}