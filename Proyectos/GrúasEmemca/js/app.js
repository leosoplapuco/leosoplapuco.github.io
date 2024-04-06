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

