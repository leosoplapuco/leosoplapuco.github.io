//Header
const Header = document.querySelector('header');
window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos=window.pageYOffset;
    
    if (ypos > 50){
        Header.classList.add('active');
    }else{
        Header.classList.remove('active');
    }
}

//SubHeader
const LinkUs = document.querySelector('.link-2');
const LinkServices = document.querySelector('.link-3');

const SubHeaderContainerUs = document.querySelector('.sub-header-container-1');
const SubHeaderContainerServices = document.querySelector('.sub-header-container-2')

LinkUs.addEventListener('click', function(){
    Header.classList.add('active');

    LinkUs.classList.toggle('active');
    SubHeaderContainerUs.classList.toggle('active');

    LinkServices.classList.remove('active');
    SubHeaderContainerServices.classList.remove('active');
})

LinkServices.addEventListener('click', function(){
    Header.classList.add('active');

    LinkUs.classList.remove('active');
    SubHeaderContainerUs.classList.remove('active');

    LinkServices.classList.toggle('active');
    SubHeaderContainerServices.classList.toggle('active');
})

//ResumenServices
const ResumenServiceTitleOne = document.querySelector('.resumen-service-target-title-1');
const ResumenServiceTargetOne = document.querySelector('.resume-service-target-1');
ResumenServiceTitleOne.addEventListener('click', function(){
    ResumenServiceTargetOne.classList.add('active');
    ResumenServiceTargetTwo.classList.remove('active');
    ResumenServiceTargetThree.classList.remove('active');})

const ResumenServiceTitleTwo = document.querySelector('.resumen-service-target-title-2');
const ResumenServiceTargetTwo = document.querySelector('.resume-service-target-2');
ResumenServiceTitleTwo.addEventListener('click', function(){
    ResumenServiceTargetOne.classList.remove('active');
    ResumenServiceTargetTwo.classList.add('active');
    ResumenServiceTargetThree.classList.remove('active');
})

const ResumenServiceTitleThree = document.querySelector('.resumen-service-target-title-3');
const ResumenServiceTargetThree = document.querySelector('.resume-service-target-3');
ResumenServiceTitleThree.addEventListener('click', function(){
    ResumenServiceTargetOne.classList.remove('active');
    ResumenServiceTargetTwo.classList.remove('active');
    ResumenServiceTargetThree.classList.add('active');
})