header = document.querySelector('header')

hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)

menu = document.querySelector('.menu-container')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

linkOne = document.querySelector('.link-1').addEventListener('click', menuDesactive)
linkTwo = document.querySelector('.link-2').addEventListener('click', menuDesactive)
linkThree = document.querySelector('.link-3').addEventListener('click', menuDesactive)
linkFour = document.querySelector('.link-4').addEventListener('click', menuDesactive)
linkFive = document.querySelector('.link-5').addEventListener('click', menuDesactive)

function menuActive(){
    menu.classList.toggle('active')
    header.classList.toggle('dark')

    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    lineThree.classList.toggle('active')
    lineFour.classList.toggle('active')
}

function menuDesactive(){
    menu.classList.remove('active')
    header.classList.remove('dark')

    lineOne.classList.remove('active')
    lineTwo.classList.remove('active')
    lineThree.classList.remove('active')
    lineFour.classList.remove('active')
}