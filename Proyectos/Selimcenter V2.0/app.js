//Hamburguer
hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', hamburguerActive)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

nav = document.querySelector('nav')

function hamburguerActive(){
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')

    nav.classList.toggle('active')
}

linkOne = document.querySelector('.link-1').addEventListener('click', hamburguerDesactive)
linkTwo = document.querySelector('.link-2').addEventListener('click', hamburguerDesactive)
linkThree = document.querySelector('.link-3').addEventListener('click', hamburguerDesactive)
// linkFour = document.querySelector('.link-4').addEventListener('click', hamburguerDesactive)
linkFive = document.querySelector('.link-5').addEventListener('click', hamburguerDesactive)
linkSix = document.querySelector('.link-6').addEventListener('click', hamburguerDesactive)
linkSeven = document.querySelector('.link-7').addEventListener('click', hamburguerDesactive)

function hamburguerDesactive(){
    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')

    nav.classList.remove('active')
}

//Treatment's filters
var products = document.querySelectorAll('.product');

filterOne = document.querySelector('.filter-1')
filterOne.addEventListener('click', filterOneActive)
function filterOneActive(){
    filterOne.classList.add('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterOne.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.remove('display-none')
    });
});

filterTwo = document.querySelector('.filter-2')
filterTwo.addEventListener('click', filterTwoActive)
function filterTwoActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.add('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterTwo.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('pulmones')){
            product.classList.remove('display-none')
        }
    });
});

filterThree = document.querySelector('.filter-3')
filterThree.addEventListener('click', filterThreeActive)
function filterThreeActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.add('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterThree.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('higado')){
            product.classList.remove('display-none')
        }
    });
});

filterFour = document.querySelector('.filter-4')
filterFour.addEventListener('click', filterFourActive)
function filterFourActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.add('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterFour.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('caballeros')){
            product.classList.remove('display-none')
        }
    });
});

filterFive = document.querySelector('.filter-5')
filterFive.addEventListener('click', filterFiveActive)
function filterFiveActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.add('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterFive.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('damas')){
            product.classList.remove('display-none')
        }
    });
});

filterSix = document.querySelector('.filter-6')
filterSix.addEventListener('click', filterSixActive)
function filterSixActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.add('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterSix.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('riñones')){
            product.classList.remove('display-none')
        }
    });
});

filterSeven = document.querySelector('.filter-7')
filterSeven.addEventListener('click', filterSevenActive)
function filterSevenActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.add('active')
    filterEight.classList.remove('active')
    filterNine.classList.remove('active')
}
filterSeven.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('colon')){
            product.classList.remove('display-none')
        }
    });
});

filterEight = document.querySelector('.filter-8')
filterEight.addEventListener('click', filterEightActive)
function filterEightActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.add('active')
    filterNine.classList.remove('active')
}
filterEight.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('estomago')){
            product.classList.remove('display-none')
        }
    });
});

filterNine = document.querySelector('.filter-9')
filterNine.addEventListener('click', filterNineActive)
function filterNineActive(){
    filterOne.classList.remove('active')
    filterTwo.classList.remove('active')
    filterThree.classList.remove('active')
    filterFour.classList.remove('active')
    filterFive.classList.remove('active')
    filterSix.classList.remove('active')
    filterSeven.classList.remove('active')
    filterEight.classList.remove('active')
    filterNine.classList.add('active')
}
filterNine.addEventListener("click", function(){
    products.forEach(function(product){
        product.classList.add('display-none')
        if(product.classList.contains('prostata')){
            product.classList.remove('display-none')
        }
    });
});

//Testimonials
testimonials = document.querySelector('.testimonials')

testimonialOne = document.querySelector('.testimonial-1')
testimonialTwo = document.querySelector('.testimonial-2')
testimonialThree = document.querySelector('.testimonial-3')
testimonialFour = document.querySelector('.testimonial-4')
testimonialFive = document.querySelector('.testimonial-5')
testimonialSix = document.querySelector('.testimonial-6')

sliderButtonOne = document.querySelector('.slider-button-1')
sliderButtonOne.addEventListener('click', testimonialOneActive)
sliderButtonTwo = document.querySelector('.slider-button-2')
sliderButtonTwo.addEventListener('click', testimonialTwoActive)
sliderButtonThree = document.querySelector('.slider-button-3')
sliderButtonThree.addEventListener('click', testimonialThreeActive)
sliderButtonFour = document.querySelector('.slider-button-4')
sliderButtonFour.addEventListener('click', testimonialFourActive)
sliderButtonFive = document.querySelector('.slider-button-5')
sliderButtonFive.addEventListener('click', testimonialFiveActive)
sliderButtonSix = document.querySelector('.slider-button-6')
sliderButtonSix.addEventListener('click', testimonialSixActive)

function testimonialOneActive(){
    testimonials.style.marginLeft = 0
    sliderButtonOne.classList.add('active')
    sliderButtonTwo.classList.remove('active')
    sliderButtonThree.classList.remove('active')
    sliderButtonFour.classList.remove('active')
    sliderButtonFive.classList.remove('active')
    sliderButtonSix.classList.remove('active')
}

function testimonialTwoActive(){
    testimonials.style.marginLeft = '-100%'
    sliderButtonOne.classList.remove('active')
    sliderButtonTwo.classList.add('active')
    sliderButtonThree.classList.remove('active')
    sliderButtonFour.classList.remove('active')
    sliderButtonFive.classList.remove('active')
    sliderButtonSix.classList.remove('active')
}

function testimonialThreeActive(){
    testimonials.style.marginLeft = '-200%'
    sliderButtonOne.classList.remove('active')
    sliderButtonTwo.classList.remove('active')
    sliderButtonThree.classList.add('active')
    sliderButtonFour.classList.remove('active')
    sliderButtonFive.classList.remove('active')
    sliderButtonSix.classList.remove('active')
}

function testimonialFourActive(){
    testimonials.style.marginLeft = '-300%'
    sliderButtonOne.classList.remove('active')
    sliderButtonTwo.classList.remove('active')
    sliderButtonThree.classList.remove('active')
    sliderButtonFour.classList.add('active')
    sliderButtonFive.classList.remove('active')
    sliderButtonSix.classList.remove('active')
}

function testimonialFiveActive(){
    testimonials.style.marginLeft = '-400%'
    sliderButtonOne.classList.remove('active')
    sliderButtonTwo.classList.remove('active')
    sliderButtonThree.classList.remove('active')
    sliderButtonFour.classList.remove('active')
    sliderButtonFive.classList.add('active')
    sliderButtonSix.classList.remove('active')
}

function testimonialSixActive(){
    testimonials.style.marginLeft = '-500%'
    sliderButtonOne.classList.remove('active')
    sliderButtonTwo.classList.remove('active')
    sliderButtonThree.classList.remove('active')
    sliderButtonFour.classList.remove('active')
    sliderButtonFive.classList.remove('active')
    sliderButtonSix.classList.add('active')
}

//FAQ
faqTitleOne = document.querySelector('.faq-title-1');
faqTitleOne.addEventListener('click', faqActive);

function faqActive(){
  faqContentOne = document.querySelector('.faq-content-1');
  faqContentOne.classList.toggle('active');
}