//Header
const Header = document.querySelector('header');

window.addEventListener('scroll', Scroll);
function Scroll(){
    var ypos=window.pageYOffset;
    if (ypos > 50){
        HeaderActive();
    }else{
        HeaderDesactive();
    }
}

function HeaderActive(){
    Header.classList.add('active');
}

function HeaderDesactive(){
    Header.classList.remove('active');
}

//SubHeader
const LinkUs = document.querySelector('.link-2');
LinkUs.addEventListener('click', LinkUsActive);

const LinkServices = document.querySelector('.link-3');
LinkServices.addEventListener('click', LinkServicesActive);

const SubHeaderContainerUs = document.querySelector('.sub-header-container-1');
const SubHeaderContainerServices = document.querySelector('.sub-header-container-2')

function LinkUsActive(){
    HeaderActive();

    LinkUs.classList.toggle('active');
    SubHeaderContainerUs.classList.toggle('active');

    LinkServices.classList.remove('active');
    SubHeaderContainerServices.classList.remove('active');
}

function LinkUsDesactive(){
    HeaderActive();

    LinkUs.classList.remove('active');
    SubHeaderContainerUs.classList.remove('active');

    LinkServices.classList.remove('active');
    SubHeaderContainerServices.classList.remove('active');
}

function LinkServicesActive(){
    LinkUs.classList.remove('active');
    SubHeaderContainerUs.classList.remove('active');

    LinkServices.classList.toggle('active');
    SubHeaderContainerServices.classList.toggle('active');
}

function LinkServicesDesactive(){
    LinkUs.classList.remove('active');
    SubHeaderContainerUs.classList.remove('active');

    LinkServices.classList.remove('active');
    SubHeaderContainerServices.classList.remove('active');
}

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