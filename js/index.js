const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const hasPlayed = sessionStorage.getItem('indexAnimation');

if (!hasPlayed) {
  gsap.from('.animated-heading', {
    duration: 1,
    y: -500,
  });

  gsap.from('.image-container__image', {
    duration: 2,
    opacity: 0,
    rotate: 50,
    x: -550,

    onComplete: function () {
      sessionStorage.setItem('indexAnimation', true);
    },
  });
}
