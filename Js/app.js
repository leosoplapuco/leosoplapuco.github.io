//Dark-mode
const dark = document.querySelector('.dark-button')
const body = document.querySelector('body')

load();

dark.addEventListener('click', e =>{
    body.classList.toggle('dark-mode');
    store(body.classList.contains('dark-mode'));
});

function load(){
    const darkmode = localStorage.getItem('dark-mode');

    if(!darkmode){
        store('false');
    }
    else if(darkmode == 'true'){
        body.classList.add('dark-mode')
    }
}

function store(value){
    localStorage.setItem('dark-mode', value);
}

//Hamburguer
hamburguer = document.querySelector('.hamburguer-container')
hamburguer.addEventListener('click', menuActive)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

menu = document.querySelector('.menu')

layer = document.querySelector('.layer')
layer.addEventListener('click', menuDesactive)

navBottom = document.querySelector('.nav-bottom_container')

function menuActive(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')

    menu.classList.toggle('active')

    layer.classList.toggle('active')

    navBottom.classList.toggle('active')
}

function menuDesactive(){
    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    lineFour.classList.remove('active')

    menu.classList.remove('active')

    layer.classList.remove('active')

    navBottom.classList.remove('active')
}