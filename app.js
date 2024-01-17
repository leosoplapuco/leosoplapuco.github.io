//Schools
const schools = document.querySelector('.schools');

const schoolButtonOne = document.querySelector('.schools-button_1');
schoolButtonOne.addEventListener('click', function(){
    schools.style.marginLeft = '0';

    schoolButtonOne.classList.add('active');
    schoolButtonTwo.classList.remove('active');
    schoolButtonThree.classList.remove('active');
    schoolButtonFour.classList.remove('active');
});

const schoolButtonTwo = document.querySelector('.schools-button_2');
schoolButtonTwo.addEventListener('click', function(){
    schools.style.marginLeft = '-100%';

    schoolButtonOne.classList.remove('active');
    schoolButtonTwo.classList.add('active');
    schoolButtonThree.classList.remove('active');
    schoolButtonFour.classList.remove('active');
});

const schoolButtonThree = document.querySelector('.schools-button_3');
schoolButtonThree.addEventListener('click', function(){
    schools.style.marginLeft = '-200%';

    schoolButtonOne.classList.remove('active');
    schoolButtonTwo.classList.remove('active');
    schoolButtonThree.classList.add('active');
    schoolButtonFour.classList.remove('active');
});

const schoolButtonFour = document.querySelector('.schools-button_4');
schoolButtonFour.addEventListener('click', function(){
    schools.style.marginLeft = '-300%';

    schoolButtonOne.classList.remove('active');
    schoolButtonTwo.classList.remove('active');
    schoolButtonThree.classList.remove('active');
    schoolButtonFour.classList.add('active');
});

//Proyects
const proyectOne = document.querySelector('.proyect-1')
const proyectButtonOne = document.querySelector('.proyect-button_1');
proyectButtonOne.addEventListener('click', function(){
    proyectOne.classList.add('active');
    proyectTwo.classList.remove('active');
    proyectThree.classList.remove('active');
    proyectFour.classList.remove('active');
    proyectFive.classList.remove('active');
})

const proyectTwo = document.querySelector('.proyect-2')
const proyectButtonTwo = document.querySelector('.proyect-button_2');
proyectButtonTwo.addEventListener('click', function(){
    proyectOne.classList.remove('active');
    proyectTwo.classList.add('active');
    proyectThree.classList.remove('active');
    proyectFour.classList.remove('active');
    proyectFive.classList.remove('active');
})

const proyectThree = document.querySelector('.proyect-3');
const proyectButtonThree = document.querySelector('.proyect-button_3');
proyectButtonThree.addEventListener('click', function(){
    proyectOne.classList.remove('active');
    proyectTwo.classList.remove('active');
    proyectThree.classList.add('active');
    proyectFour.classList.remove('active');
    proyectFive.classList.remove('active');
})

const proyectFour = document.querySelector('.proyect-4');
const proyectButtonFour = document.querySelector('.proyect-button_4');
proyectButtonFour.addEventListener('click', function(){
    proyectOne.classList.remove('active');
    proyectTwo.classList.remove('active');
    proyectThree.classList.remove('active');
    proyectFour.classList.add('active');
    proyectFive.classList.remove('active');
})

const proyectFive = document.querySelector('.proyect-5');
const proyectButtonFive = document.querySelector('.proyect-button_5');
proyectButtonFive.addEventListener('click', function(){
    proyectOne.classList.remove('active');
    proyectTwo.classList.remove('active');
    proyectThree.classList.remove('active');
    proyectFour.classList.remove('active');
    proyectFive.classList.add('active');
})

//Email
const email = 'leosoplapuco29@gmail.com';

const emailTag = document.querySelectorAll('.email');
emailTag.forEach((emailTag) => {
    emailTag.innerHTML = email;
    navigator.clipboard.writeText(email);
});
