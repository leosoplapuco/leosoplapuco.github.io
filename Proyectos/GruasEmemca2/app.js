//Header
const Menu = document.querySelector('.menu');
const Hamburguer = document.querySelector('.hamburguer-icon');
const Header = document.querySelector('header');

Hamburguer.addEventListener('click', MenuActive);

function MenuActive(){
    Menu.classList.toggle('active');
    Hamburguer.classList.toggle('active');
}

window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 50){
        Header.classList.add('active');
    } else {
        Header.classList.remove('active');
        MenuDesactive();
    };
}

function MenuDesactive(){
    Menu.classList.remove('active');
    Hamburguer.classList.remove('active');
}