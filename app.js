//DarkMode
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

//Menu
hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

nav = document.querySelector('nav')

function menuActive(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')

    nav.classList.toggle('active')

    settingsDesactive()
}

function menuDesactive(){
    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    lineFour.classList.remove('active')

    nav.classList.remove('active')
}

//Settings
settingsButton = document.querySelector('.settings-button')
settingsButton.addEventListener('click', settingsActive)

settings = document.querySelector('.settings-container')

settingsClose = document.querySelector('.settings-close')
settingsClose.addEventListener('click', settingsDesactive)

function settingsActive(){
    settings.classList.add('active')

    menuDesactive()
}

function settingsDesactive(){
    settings.classList.remove('active')
}