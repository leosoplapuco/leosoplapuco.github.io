//DarkMode
const dark = document.querySelector('.darkButton')
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

//HamburguerAnimation
hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuOpen)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

layer = document.querySelector('.layer')
layer.addEventListener('click', menuClose)

menu = document.querySelector('.menu')

linkOne = document.querySelector('.link-1')
linkOne.addEventListener('click', menuClose)
linkTwo = document.querySelector('.link-2')
linkTwo.addEventListener('click', menuClose)
linkThree = document.querySelector('.link-3')
linkThree.addEventListener('click', menuClose)
linkFour = document.querySelector('.link-4')
linkFour.addEventListener('click', menuClose)
linkFive = document.querySelector('.link-5')
linkFive.addEventListener('click', menuClose)

function menuOpen(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')

    layer.classList.toggle('active')

    menu.classList.toggle('active')
}

function menuClose(){
    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    lineFour.classList.remove('active')

    layer.classList.remove('active')

    menu.classList.remove('active')
}