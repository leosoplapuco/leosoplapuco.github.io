hamburguer = document.querySelector('.hamburguer')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

menu = document.querySelector('.menuContainer')

function Open(){
    lineOne.classList.toggle('line-1__active')
    lineTwo.classList.toggle('line-2__active')
    lineThree.classList.toggle('line-3__active')
    lineFour.classList.toggle('line-4__active')

    menu.classList.toggle('menu__active')
}

function Close(){
    lineOne.classList.remove('line-1__active')
    lineTwo.classList.remove('line-2__active')
    lineThree.classList.remove('line-3__active')
    lineFour.classList.remove('line-4__active')

    menu.classList.remove('menu__active')
}

webButtonOne = document.querySelector('.webButton-1')
webButtonTwo = document.querySelector('.webButton-2')
webButtonThree = document.querySelector('.webButton-3')

kindOfWebUl = document.querySelector('.kindOfWebUl')

indicator = document.querySelector('.indicator')

function kindOne(){
    kindOfWebUl.style.marginLeft = "0"
    indicator.style.left = "0"
}

function kindTwo(){
    kindOfWebUl.style.marginLeft = "-100%"
    indicator.style.left = "120px"
}

function kindThree(){
    kindOfWebUl.style.marginLeft = "-200%"
    indicator.style.left = "240px"
}