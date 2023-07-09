accept = document.querySelector('.accept')
accept.addEventListener('click', Accept)
layer = document.querySelector('.layer')
modal = document.querySelector('.modalInitial')

function Accept(){
    layer.classList.remove('active')
    modal.classList.remove('active')
}

hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)
menu = document.querySelector('.menuContainer')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')

function menuActive(){
    menu.classList.toggle('active')

    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')
}