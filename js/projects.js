const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

//Swiper.js
//Init swiper
var swiper = new Swiper('.swiper-container', {
  speed: 2000,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    loop: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const tl = gsap.timeline();

const hasPlayed = sessionStorage.getItem('projectsAnimation');

if (!hasPlayed) {
  tl.from('.swiper-container', {
    rotate: 10,
    x: 150,
    y: -150,
    duration: 2,
    stagger: 1,
    scale: 0,
    opacity: 0,
    ease: 'back',

    onComplete: function () {
      sessionStorage.setItem('projectsAnimation', true);
    },
  });
}
