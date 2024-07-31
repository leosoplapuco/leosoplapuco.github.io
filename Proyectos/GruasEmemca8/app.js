const DarkMode = document.querySelector('.dark-button');

DarkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');

	if(document.body.classList.contains('dark-mode')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

//WhatsApp
const WhatsApp = document.querySelector('.whatsapp');

window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 50){
        WhatsApp.classList.add('active');
    }else{
        WhatsApp.classList.remove('active');
    }
}

//SubHeader
const SubHeaderUs = document.querySelector('.sub-header-container-1');
const LinkUs = document.querySelector('.link-2');
LinkUs.addEventListener('click', SubHeaderUsActive);

function SubHeaderUsActive(){
    LinkUs.classList.toggle('active');
    SubHeaderUs.classList.toggle('active');
}

function SubHeaderUsDesactive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');
}

const subHeaderLinks = document.querySelectorAll('.sub-header-link');

subHeaderLinks.forEach(subHeaderLink => {
    subHeaderLink.addEventListener('click', () => {
        SubHeaderUsDesactive();
        MenuDesactive();
    });
});

function SubHeaderDesactive(){
    SubHeaderUsDesactive();
}

const Menu = document.querySelector('.menu-container');

const MenuIcon = document.querySelector('.menu-icon');
MenuIcon.addEventListener('click', MenuActive);

function MenuActive(){
    MenuIcon.classList.toggle('active');
    Menu.classList.toggle('active');
}

function MenuDesactive(){
    MenuIcon.classList.remove('active');
    Menu.classList.remove('active');
}

const LinkOne = document.querySelector('.link-1');
LinkOne.addEventListener('click', MenuDesactive);

const LinkThree = document.querySelector('.link-3');
LinkThree.addEventListener('click', MenuDesactive);

const LinkFour = document.querySelector('.link-4');
LinkFour.addEventListener('click', MenuDesactive);

const LinkFive = document.querySelector('.link-5');
LinkFive.addEventListener('click', MenuDesactive);

const HeaderContactButton = document.querySelector('.header-contact-button');
HeaderContactButton.addEventListener('click', MenuDesactive);
HeaderContactButton.addEventListener('click', SubHeaderDesactive);

const $form = document.querySelector('#contact-form');
const FormSendTarget = document.querySelector('.form-contact-send');

$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form, headers:{'Accept': 'aplication/json'}
    })
    if (response.ok){
        this.reset();
        FormSend();
    }
}

function FormSend() {
    FormSendTarget.classList.add('active');
    setTimeout(() => { FormSendTarget.classList.remove('active'); }, 5000);
}
