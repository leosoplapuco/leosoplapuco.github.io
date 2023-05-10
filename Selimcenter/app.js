//Header
window.addEventListener('scroll', Scroll);
function Scroll(){
    header =  document.querySelector('header');
    var ypos=window.pageYOffset;
    if (ypos > 350){
        header.style.background="#fff";
        header.style.borderBottom="3px solid #0043a1"
    }
    else{
        header.style.background="none";
        header.style.borderBottom="3px solid transparent"
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

//FormSended
thanks = document.querySelector('.thanksContainer')
thanksClose = document.querySelector('.thanksClose')
thanksClose.addEventListener('click', thanksRemove)

function thanksActive(){
    thanks.classList.add('thanks__active')
}

function thanksRemove(){
    thanks.classList.remove('thanks__active')
}

const $form = document.querySelector('form')
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
        thanksActive()
    }
}

//AnimationScroll
opacity = document.querySelectorAll(".opacity")
left = document.querySelectorAll(".left")

function animationOpacity(){
    scrollTop = document.documentElement.scrollTop;
    for(i = 0; i<opacity.length; i++){
        altura = opacity[i].offsetTop;
        if(altura - 300 < scrollTop){
            opacity[i].style.opacity = "1"
        }
    }
}

window.addEventListener('scroll', animationOpacity)