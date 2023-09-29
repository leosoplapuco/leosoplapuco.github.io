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

//Nav-Bar
navBarContainer = document.querySelector('.nav-bar_container')

navButton = document.querySelector('.nav-bar_button')
navButton.addEventListener('click', navActive)

layer = document.querySelector('.layer')
layer.addEventListener('click', navDesactive)

function navActive(){
    navBarContainer.classList.toggle('active')
    layer.classList.toggle('active')
}

linkOne = document.querySelector('.link-1').addEventListener('click', navDesactive)
linkTwo = document.querySelector('.link-2').addEventListener('click', navDesactive)
linkThree = document.querySelector('.link-3').addEventListener('click', navDesactive)
linkFour = document.querySelector('.link-4').addEventListener('click', navDesactive)
linkFive = document.querySelector('.link-5').addEventListener('click', navDesactive)
linkSix = document.querySelector('.link-6').addEventListener('click', navDesactive)

function navDesactive(){
    navBarContainer.classList.remove('active')
    layer.classList.remove('active')
}