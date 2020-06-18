const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function animationTimeline() {
  const tl = gsap.timeline();

  let hasPlayed = sessionStorage.getItem('hasAnimationPlayed');

  if (!hasPlayed) {
    tl.from('.animated-social-media', {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      x: 50,
      y: -50,
      ease: 'sine',
      onComplete: function () {
        sessionStorage.setItem('hasAnimationPlayed', true);
      },
    });

    tl.from('.animated-heading', {
      opacity: 0,
      y: 250,
      scale: 0.1,
      duration: 1,
      stagger: 1,
      ease: 'back',
    });

    tl.from('.image-container__image', {
      opacity: 0,
      duration: 1.5,
      rotation: 80,
      scale: 1.8,
      x: 20,
      y: -50,
      ease: 'back',
    });
  }
}

animationTimeline();
