//AppData
const github = 'https://github.com/leosoplapuco';
const instagram = 'https://www.instagram.com/leosoplapuco/';
const linkedIn = 'https://www.linkedin.com/in/leosoplapuco/';

const GitHub = document.querySelectorAll(".github");
for (const githubLinks of GitHub) {
    githubLinks.href = github;
    githubLinks.innerHTML = 'GitHub';
};

const Instagram = document.querySelectorAll(".instagram");
for (const instagramLink of Instagram) {
    instagramLink.href = instagram;
    instagramLink.innerHTML = 'Instagram';
};

const LinkedIn = document.querySelectorAll(".linkedIn");
for (const linkedInLink of LinkedIn) {
    linkedInLink.href = linkedIn;
    linkedInLink.innerHTML = 'LinkedIn';
};

//Proyects
// const proyectOne = document.querySelector('.proyect-1');
// proyectOne.addEventListener('click', proyectOneActive);

// function proyectOneActive(){
//     proyectOne.classList.add('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectTwo = document.querySelector('.proyect-2');
// proyectTwo.addEventListener('click', proyectTwoActive);

// function proyectTwoActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.add('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectThree = document.querySelector('.proyect-3');
// proyectThree.addEventListener('click', proyectThreeActive);

// function proyectThreeActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.add('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectFour = document.querySelector('.proyect-4');
// proyectFour.addEventListener('click', proyectFourActive);

// function proyectFourActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.add('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectFive = document.querySelector('.proyect-5');
// proyectFive.addEventListener('click', proyectFiveActive);

// function proyectFiveActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.add('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectSix = document.querySelector('.proyect-6');
// proyectSix.addEventListener('click', proyectSixActive);

// function proyectSixActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.add('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.remove('active');
// }

// const proyectSeven = document.querySelector('.proyect-7');
// proyectSeven.addEventListener('click', proyectSevenActive);

// function proyectSevenActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.add('active');
//     proyectEight.classList.remove('active');
// }

// const proyectEight = document.querySelector('.proyect-8');
// proyectEight.addEventListener('click', proyectEightActive);

// function proyectEightActive(){
//     proyectOne.classList.remove('active');
//     proyectTwo.classList.remove('active');
//     proyectThree.classList.remove('active');
//     proyectFour.classList.remove('active');
//     proyectFive.classList.remove('active');
//     proyectSix.classList.remove('active');
//     proyectSeven.classList.remove('active');
//     proyectEight.classList.add('active');
// }

//Header animation
// const header = document.querySelector('header');
// let prevScrollPos = window.pageYOffset;

//   window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//         header.classList.remove('active')
//     } else {
//         header.classList.add('active')
//     }
//     prevScrollPos = currentScrollPos;
// }