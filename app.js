//AppData
const github = 'https://github.com/leosoplapuco';
const instagram = 'https://www.instagram.com/leosoplapuco/';
const linkedIn = 'https://www.linkedin.com/in/leosoplapuco/';

const GitHub = document.querySelectorAll(".github");
for (const githubLinks of GitHub) {
    githubLinks.href = github;
};

const Instagram = document.querySelectorAll(".instagram");
for (const instagramLink of Instagram) {
    instagramLink.href = instagram;
};

const LinkedIn = document.querySelectorAll(".linkedIn");
for (const linkedInLink of LinkedIn) {
    linkedInLink.href = linkedIn;
};

//Header animation
const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('active')
    } else {
        header.classList.add('active')
    }
    prevScrollPos = currentScrollPos;
}

//Menu
const menu = document.querySelector('.menu-container');
const hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListener('click', menuActive);

function menuActive(){
    menu.classList.toggle('active');
    hamburguer.classList.toggle('active');
}