hamburguer = document.querySelector('.hamburger')

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

typeButtonOne = document.querySelector('.webButton-1')
typeButtonTwo = document.querySelector('.webButton-2')
typeButtonThree = document.querySelector('.webButton-3')

typeList = document.querySelector('.typeOfWeb')

function listOne(){
    typeList.style.marginLeft = "0"
}
function listTwo(){
    typeList.style.marginLeft = "-100%"
}
function listThree(){
    typeList.style.marginLeft = "-200%"
}