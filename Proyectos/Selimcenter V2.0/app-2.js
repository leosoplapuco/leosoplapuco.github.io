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

//FAQ
faqTitleOne = document.querySelector('.faq-title-1');
faqContentOne = document.querySelector('.faq-content-1');
faqTitleOne.addEventListener('click', faqOneActive);
function faqOneActive(){
    faqContentOne.classList.toggle('active');
    faqContentTwo.classList.remove('active');
    faqContentThree.classList.remove('active');
    faqContentFour.classList.remove('active')
}

faqTitleTwo = document.querySelector('.faq-title-2');
faqContentTwo = document.querySelector('.faq-content-2');
faqTitleTwo.addEventListener('click', faqTwoActive);
function faqTwoActive(){
    faqContentOne.classList.remove('active');
    faqContentTwo.classList.toggle('active');
    faqContentThree.classList.remove('active');
    faqContentFour.classList.remove('active')
}

faqTitleThree = document.querySelector('.faq-title-3');
faqContentThree = document.querySelector('.faq-content-3');
faqTitleThree.addEventListener('click', faqThreeActive);
function faqThreeActive(){
    faqContentOne.classList.remove('active');
    faqContentTwo.classList.remove('active');
    faqContentThree.classList.toggle('active');
    faqContentFour.classList.remove('active')
}

faqTitleFour = document.querySelector('.faq-title-4');
faqContentFour = document.querySelector('.faq-content-4');
faqTitleFour.addEventListener('click', faqFourActive);
function faqFourActive(){
    faqContentOne.classList.remove('active');
    faqContentTwo.classList.remove('active');
    faqContentThree.classList.remove('active');
    faqContentFour.classList.toggle('active')
}