const SubHeader1 = document.querySelector('.sub-header-container-1');
const Link2 = document.querySelector('.link-2');
Link2.addEventListener('click', function(){
    Link2.classList.toggle('active');
    Link3.classList.remove('active');
    SubHeader1.classList.toggle('active');
    SubHeader2.classList.remove('active');
})

const SubHeader2 = document.querySelector('.sub-header-container-2');
const Link3 = document.querySelector('.link-3');
Link3.addEventListener('click', function(){
    Link2.classList.remove('active');
    Link3.classList.toggle('active');
    SubHeader1.classList.remove('active');
    SubHeader2.classList.toggle('active');
})

//

const HeroVideos = document.querySelector('.hero-target-videos');

const BgVideo1 = document.querySelector('.background-video-1');
const BgVideo2 = document.querySelector('.background-video-2');

const HeroVideoButton1 = document.querySelector('.hero-target-button-1');
HeroVideoButton1.addEventListener('click', function(){
    BgVideo1.classList.add('active');
    BgVideo2.classList.remove('active');
    HeroVideoButton1.classList.add('desactive');
    HeroVideoButton2.classList.remove('desactive');
    HeroVideos.style.marginLeft = "0%";
})

const HeroVideoButton2 = document.querySelector('.hero-target-button-2');
HeroVideoButton2.addEventListener('click', function(){
    BgVideo1.classList.remove('active');
    BgVideo2.classList.add('active');
    HeroVideoButton1.classList.remove('desactive');
    HeroVideoButton2.classList.add('desactive');
    HeroVideos.style.marginLeft = "-100%";
})

const video1 = document.querySelector('.hero-target-video-1');
const video2 = document.querySelector('.hero-target-video-2');

video1.addEventListener('play', () => {
    BgVideo1.play();
});

video1.addEventListener('pause', () => {
    BgVideo1.pause();
});

video2.addEventListener('play', () => {
    BgVideo2.play();
});

video2.addEventListener('pause', () => {
    BgVideo2.pause();
});

document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        customCursor.style.transform = 'scale(0.25)'; // Pequeña animación al hacer clic
    });

    document.addEventListener('mouseup', () => {
        customCursor.style.transform = 'scale(1)';
    });
});
