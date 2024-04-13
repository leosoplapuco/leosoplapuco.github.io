//Header animation
const header = document.querySelector('header');
const whatsapp = document.querySelector('.whatsapp-container');

window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    if (ypos > 50){
        header.classList.add('active');
        whatsapp.classList.add('active');
    }
    else{
        header.classList.remove('active');
        whatsapp.classList.remove('active');
    }
}

//Customers
const customers = document.querySelector('.customers');

const customerButtonOne = document.querySelector('.customer-button_1');
customerButtonOne.addEventListener('click', function(){
    customers.style.marginLeft = '0';
    customerButtonOne.classList.add('active');
    customerButtonTwo.classList.remove('active');
    customerButtonThree.classList.remove('active');
})

const customerButtonTwo = document.querySelector('.customer-button_2');
customerButtonTwo.addEventListener('click', function(){
    customers.style.marginLeft = '-100%';
    customerButtonOne.classList.remove('active');
    customerButtonTwo.classList.add('active');
    customerButtonThree.classList.remove('active');
})

const customerButtonThree = document.querySelector('.customer-button_3');
customerButtonThree.addEventListener('click', function(){
    customers.style.marginLeft = '-200%';
    customerButtonOne.classList.remove('active');
    customerButtonTwo.classList.remove('active');
    customerButtonThree.classList.add('active');
})

//Maps
const mapButtonOne = document.querySelector('.ubication-button_1');
mapButtonOne.addEventListener('click', function(){
    mapButtonOne.classList.add('active');
    mapButtonTwo.classList.remove('active');
    mapOne.classList.add('active');
    mapTwo.classList.remove('active');
})

const mapButtonTwo = document.querySelector('.ubication-button_2');
mapButtonTwo.addEventListener('click', function(){
    mapButtonOne.classList.remove('active');
    mapButtonTwo.classList.add('active');
    mapOne.classList.remove('active');
    mapTwo.classList.add('active');
})

const mapOne = document.querySelector('.map-1');
const mapTwo = document.querySelector('.map-2')