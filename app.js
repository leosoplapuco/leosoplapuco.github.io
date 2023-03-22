//DarkMode
const dark = document.querySelector('.darkButton')
const body = document.querySelector('body')
load();
dark.addEventListener('click', e =>{
    body.classList.toggle('light-mode');
    store(body.classList.contains('light-mode'));
});
function load(){
    const darkmode = localStorage.getItem('light-mode');
    if(!darkmode){
        store('false');
    }
    else if(darkmode == 'true'){
        body.classList.add('light-mode')
    }
}
function store(value){
    localStorage.setItem('light-mode', value);
}

//Hamburguer Menu Animation
lineOne = document.querySelector('.line-1')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')
menu = document.querySelector('.menuContainer')
function openMenu(){
    lineOne.classList.toggle('line-1__active')
    lineThree.classList.toggle('line-3__active')
    lineFour.classList.toggle('line-4__active')
    menu.classList.toggle('menu__active')
}
function closeMenu(){
    lineOne.classList.remove('line-1__active')
    lineThree.classList.remove('line-3__active')
    lineFour.classList.remove('line-4__active')
    menu.classList.remove('menu__active')
}

//TypesScroll
types = document.querySelector('.types')
function typeOne(){
    types.style.marginLeft = "0"
}
function typeTwo(){
    types.style.marginLeft = "-100%"
}
function typeThree(){
    types.style.marginLeft = "-200%"
}
function typeFour(){
    types.style.marginLeft = "-300%"
}

//FreeWebPage
freeModal = document.querySelector('.freeModalContainer')
function openFree(){
    freeModal.classList.add('freeModalContainer__active')
}
function closeFree(){
    freeModal.classList.remove('freeModalContainer__active')
}

transparent = document.querySelector('.transparent')
function openTransparent(){
    transparent.classList.add('transparent__active')
}
function closeTransparent(){
    transparent.classList.remove('transparent__active')
}

freeThanks = document.querySelector('.thanksFree')
function openFreeThanks(){
    freeThanks.classList.add('thanksFree__active')
}
function closeFreeThanks(){
    freeThanks.classList.remove('thanksFree__active')
}

//FreeForm
const $freeForm = document.querySelector('.freeForm')
$freeForm.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'aplication/json'
        }
    })
    if (response.ok){
        this.reset()
        closeFree(), openTransparent(), openFreeThanks()
    }
}