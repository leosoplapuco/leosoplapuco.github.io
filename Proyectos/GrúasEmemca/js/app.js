//ProgressBar
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

//ScrollAnimation
window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 300){
        WhatsApp.classList.add('active');
    }else{
        WhatsApp.classList.remove('active');
    }
}

//Header
const Menu = document.querySelector('.menu');
const HamburguerIcon = document.querySelector('.hamburguer-icon');

HamburguerIcon.addEventListener('click', menuActive);

function menuActive(){
    Menu.classList.toggle('active');
    HamburguerIcon.classList.toggle('active');
}

function menuDesactive(){
    Menu.classList.remove('active');
    HamburguerIcon.classList.remove('active');
}

//WhatsApp
const WhatsApp = document.querySelector('.whatsApp');