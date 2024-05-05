//Menu
const menu = document.querySelector('.menu-cellphone');

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', menuActive);

function menuActive(){
    menu.classList.add('active');
    closeMenu.classList.add('active');
}

const closeMenu = document.querySelector('.close-icon');
closeMenu.addEventListener('click', menuDesactive);

function menuDesactive(){
    menu.classList.remove('active');
    closeMenu.classList.remove('active');
}