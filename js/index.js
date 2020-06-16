const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  console.log(navLinks);
});

function animationTimeline() {
  const tl = gsap.timeline();

  tl.to('.animated-social-media', {
    opacity: 1,
    duration: 1,
    stagger: 0.5,
  });

  /*   tl.from('.animated-heading', {
    rotation: -180,
    y: 200,
    opacity: 0,
    scale: 0.1,
    duration: 1,
    ease: 'back',
    stagger: 1,
  }); */

  tl.from('.image-container__image', {
    opacity: 0,
    duration: 1,
    opacity: 0,
    y: 50,
    x: 150,
    rotate: 120,
    scale: 2,
    duration: 3,
    ease: 'back',
  });
}

animationTimeline();
