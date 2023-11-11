window.addEventListener('scroll', Scroll);

function Scroll(){
    header =  document.querySelector('header');
    var ypos=window.pageYOffset;
    
    if (ypos > 200){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

//Menu
let linkService = document.querySelector('.nav-li_submenu-1');
linkService.addEventListener('mouseover', serviceSubMenu);

let subMenuService = document.querySelector('.sub-menu')

function serviceSubMenu(){
    subMenuService.classList.add('active')
}