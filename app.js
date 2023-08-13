//menu-animation
hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

nav = document.querySelector('nav')

layer = document.querySelector('.body-layer')
layer.addEventListener('click', menuDesactive)

function menuActive(){
    nav.classList.toggle('active')

    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')

    layer.classList.toggle('active')
}

function menuDesactive(){
    nav.classList.remove('active')

    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    lineFour.classList.remove('active')

    layer.classList.remove('active')
}