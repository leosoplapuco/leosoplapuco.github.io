//DarkMode
const dark = document.querySelector('.dark__button')
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

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

header = document.querySelector('header')
menu = document.querySelector('.menuContainer')

function Open(){
    menu.classList.toggle('menu__active')

    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')
    lineFour.classList.toggle('line-4__active')
}

function Close(){
    menu.classList.remove('menu__active')

    lineOne.classList.remove('line-1__active')
    lineTwo.classList.remove('line-2__active')
    lineThree.classList.remove('line-3__active')
    lineFour.classList.remove('line-4__active')
}

types = document.querySelector('.typesWeb')
function typesOne(){
    types.style.marginLeft = "0"
}
function typesTwo(){
    types.style.marginLeft = "-100%"
}
function typesThree(){
    types.style.marginLeft = "-200%"
}

//
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});
select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

//Form
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

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
        openAlert()
    }
}

alert = document.querySelector('.alertContainer')
function openAlert(){
    alert.classList.add('alertContainer__active')
}

function closeAlert(){
    alert.classList.remove('alertContainer__active')
}