//SubHeader
const SubHeaderUs = document.querySelector('.sub-header-container-1');
const LinkUs = document.querySelector('.link-2');
LinkUs.addEventListener('click', SubHeaderUsActive);

function SubHeaderUsActive(){
    LinkUs.classList.toggle('active');
    SubHeaderUs.classList.toggle('active');

    LinkServices.classList.remove('active');
    SubHeaderServices.classList.remove('active');
}

const SubHeaderServices = document.querySelector('.sub-header-container-2');
const LinkServices = document.querySelector('.link-3');
LinkServices.addEventListener('click', SubHeaderServicesActive);

function SubHeaderServicesActive(){
    LinkUs.classList.remove('active');
    SubHeaderUs.classList.remove('active');

    LinkServices.classList.toggle('active');
    SubHeaderServices.classList.toggle('active');
}

//Menu
const Menu = document.querySelector('.menu-container');

const MenuIcon = document.querySelector('.menu-icon');
MenuIcon.addEventListener('click', MenuActive);

function MenuActive(){
    MenuIcon.classList.toggle('active');
    Menu.classList.toggle('active');
}

//Maps
const UbicationOne = document.querySelector('.ubication-1');
const MapOne = document.querySelector('.map-1');
UbicationOne.addEventListener('click', function(){
    UbicationOne.classList.add('active');
    MapOne.classList.add('active');

    UbicationTwo.classList.remove('active');
    MapTwo.classList.remove('active');
})

const UbicationTwo = document.querySelector('.ubication-2');
const MapTwo = document.querySelector('.map-2');
UbicationTwo.addEventListener('click', function(){
    UbicationOne.classList.remove('active');
    MapOne.classList.remove('active');

    UbicationTwo.classList.add('active');
    MapTwo.classList.add('active');
})

//Form

const InputNumbers = document.querySelectorAll('.input-number');

InputNumbers.forEach(InputNumber => {
    InputNumber.addEventListener('input', (event) => {
        if (event.target.value.length > 9) {
            event.target.value = event.target.value.substring(0, 9);
        }
    });
});

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
