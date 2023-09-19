header = document.querySelector('header')

hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', menuActive)

menu = document.querySelector('.menu-container')

lineOne = document.querySelector('.line-1')
lineTwo = document.querySelector('.line-2')
lineThree = document.querySelector('.line-3')
lineFour = document.querySelector('.line-4')

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

// window.addEventListener('scroll', Scroll);
// function Scroll(){
//     var ypos=window.pageYOffset;
//     if (ypos < 645){
//         menuDesactive()
//     }
// }