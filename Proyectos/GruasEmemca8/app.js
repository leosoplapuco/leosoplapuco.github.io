//DarkMode
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

    // LinkServices.classList.remove('active');
    // SubHeaderServices.classList.remove('active');
}

function SubHeaderUsDesactive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');
}

// const SubHeaderServices = document.querySelector('.sub-header-container-2');
// const LinkServices = document.querySelector('.link-3');
// LinkServices.addEventListener('click', SubHeaderServicesActive);

// function SubHeaderServicesActive(){
//     LinkUs.classList.remove('active');
//     SubHeaderUs.classList.remove('active');

//     LinkServices.classList.toggle('active');
//     SubHeaderServices.classList.toggle('active');
// }

// function SubHeaderServicesDesactive(){
//     LinkServices.classList.remove('active');
//     SubHeaderServices.classList.remove('active');
// }

const subHeaderLinks = document.querySelectorAll('.sub-header-link');

subHeaderLinks.forEach(subHeaderLink => {
    subHeaderLink.addEventListener('click', () => {
        // SubHeaderServicesDesactive();
        SubHeaderUsDesactive();
        MenuDesactive();
    });
});

function SubHeaderDesactive(){
    SubHeaderUsDesactive();
    // SubHeaderServicesDesactive();
}

//Menu
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

//Video demo
// const VideoDemoButton = document.querySelector('.video-demo-button');
// const BodyLayer = document.querySelector('.body-layer');
// const VideoDemo = document.querySelector('.video-demo')

// VideoDemoButton.addEventListener('click', VideoDemoActive)

// function VideoDemoActive(){
//     BodyLayer.classList.add('active');
//     VideoDemo.classList.add('active');
// }

// BodyLayer.addEventListener('click', VideoDemoDesactive)

// function VideoDemoDesactive(){
//     BodyLayer.classList.remove('active');
//     VideoDemo.classList.remove('active');

//     VideoDemo.pause();
// }

// //Maps
// const UbicationOne = document.querySelector('.ubication-1');
// const MapOne = document.querySelector('.map-1');
// UbicationOne.addEventListener('click', function(){
//     UbicationOne.classList.add('active');
//     MapOne.classList.add('active');

//     UbicationTwo.classList.remove('active');
//     MapTwo.classList.remove('active');
// })

// const UbicationTwo = document.querySelector('.ubication-2');
// const MapTwo = document.querySelector('.map-2');
// UbicationTwo.addEventListener('click', function(){
//     UbicationOne.classList.remove('active');
//     MapOne.classList.remove('active');

//     UbicationTwo.classList.add('active');
//     MapTwo.classList.add('active');
// })

// //Form
// const InputNumbers = document.querySelectorAll('.input-number');

// InputNumbers.forEach(InputNumber => {
//     InputNumber.addEventListener('input', (event) => {
//         if (event.target.value.length > 9) {
//             event.target.value = event.target.value.substring(0, 9);
//         }
//     });
// });

// const $form = document.querySelector('#contact-form');
// const FormSendTarget = document.querySelector('.form-contact-send');

// $form.addEventListener('submit', handleSubmit)
// async function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form, headers:{'Accept': 'aplication/json'}
//     })
//     if (response.ok){
//         this.reset();
//         FormSend();
//     }
// }

// function FormSend() {
//     FormSendTarget.classList.add('active');
//     setTimeout(() => { FormSendTarget.classList.remove('active'); }, 5000);
// }
