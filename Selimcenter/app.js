//Header
window.addEventListener('scroll', Scroll);
function Scroll(){
    header =  document.querySelector('header');
    var ypos=window.pageYOffset;
    if (ypos > 350){
        header.style.background="#fff";
    }
    else{
        header.style.background="none";
    }
}

//Hamburguer
hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuOpen)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

headerC = document.querySelector('.header-c')

menu = document.querySelector('.menu')

function menuOpen(){
    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')

    headerC.classList.toggle('header__active')

    menu.classList.toggle('menu__active')
}

linkOne = document.querySelector('.link-1')
linkTwo = document.querySelector('.link-2')
linkThree = document.querySelector('.link-3')
linkFour = document.querySelector('.link-4')

linkOne.addEventListener('click', menuClose)
linkTwo.addEventListener('click', menuClose)
linkThree.addEventListener('click', menuClose)
linkFour.addEventListener('click', menuClose)

function menuClose(){
    lineOne.classList.remove('line-1__active')
    lineTwo.classList.remove('line-2__active')
    lineThree.classList.remove('line-3__active')

    headerC.classList.remove('header__active')

    menu.classList.remove('menu__active')
}

//Treatments
treatmentOne = document.querySelector('.treatment-1')
treatmentOne.addEventListener('click', treatmentOneActive)
function treatmentOneActive(){
    treatmentOne.classList.toggle('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentTwo = document.querySelector('.treatment-2')
treatmentTwo.addEventListener('click', treatmentTwoActive)
function treatmentTwoActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.toggle('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentThree = document.querySelector('.treatment-3')
treatmentThree.addEventListener('click', treatmentThreeActive)
function treatmentThreeActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.toggle('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentFour = document.querySelector('.treatment-4')
treatmentFour.addEventListener('click', treatmentFourActive)
function treatmentFourActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.toggle('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentFive = document.querySelector('.treatment-5')
treatmentFive.addEventListener('click', treatmentFiveActive)
function treatmentFiveActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.toggle('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentSix = document.querySelector('.treatment-6')
treatmentSix.addEventListener('click', treatmentSixActive)
function treatmentSixActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.toggle('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentSeven = document.querySelector('.treatment-7')
treatmentSeven.addEventListener('click', treatmentSevenActive)
function treatmentSevenActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.toggle('treatment__active')
    treatmentEight.classList.remove('treatment__active')
}

treatmentEight = document.querySelector('.treatment-8')
treatmentEight.addEventListener('click', treatmentEightActive)
function treatmentEightActive(){
    treatmentOne.classList.remove('treatment__active')
    treatmentTwo.classList.remove('treatment__active')
    treatmentThree.classList.remove('treatment__active')
    treatmentFour.classList.remove('treatment__active')
    treatmentFive.classList.remove('treatment__active')
    treatmentSix.classList.remove('treatment__active')
    treatmentSeven.classList.remove('treatment__active')
    treatmentEight.classList.toggle('treatment__active')
}

//Testimonial
testimonials = document.querySelector('.testimonials')

testimonialButtonOne = document.querySelector('.testimonialButton-1')
testimonialButtonOne.addEventListener('click', testimonialOne)
function testimonialOne(){
    testimonials.style.marginLeft = "0"

    testimonialButtonOne.classList.add('testimonialButton__active')
    testimonialButtonTwo.classList.remove('testimonialButton__active')
    testimonialButtonThree.classList.remove('testimonialButton__active')
    testimonialButtonFour.classList.remove('testimonialButton__active')
}

testimonialButtonTwo = document.querySelector('.testimonialButton-2')
testimonialButtonTwo.addEventListener('click', testimonialTwo)
function testimonialTwo(){
    testimonials.style.marginLeft = "-100%"

    testimonialButtonOne.classList.remove('testimonialButton__active')
    testimonialButtonTwo.classList.add('testimonialButton__active')
    testimonialButtonThree.classList.remove('testimonialButton__active')
    testimonialButtonFour.classList.remove('testimonialButton__active')
}

testimonialButtonThree = document.querySelector('.testimonialButton-3')
testimonialButtonThree.addEventListener('click', testimonialThree)
function testimonialThree(){
    testimonials.style.marginLeft = "-200%"

    testimonialButtonOne.classList.remove('testimonialButton__active')
    testimonialButtonTwo.classList.remove('testimonialButton__active')
    testimonialButtonThree.classList.add('testimonialButton__active')
    testimonialButtonFour.classList.remove('testimonialButton__active')
}

testimonialButtonFour = document.querySelector('.testimonialButton-4')
testimonialButtonFour.addEventListener('click', testimonialFour)
function testimonialFour(){
    testimonials.style.marginLeft = "-300%"

    testimonialButtonOne.classList.remove('testimonialButton__active')
    testimonialButtonTwo.classList.remove('testimonialButton__active')
    testimonialButtonThree.classList.remove('testimonialButton__active')
    testimonialButtonFour.classList.add('testimonialButton__active')
}