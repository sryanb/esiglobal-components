Drupal.behaviors.mainMenu = {
  attach(context) {
    const hamburger = context.querySelector('.hamburger');
    const menuOverlay = context.querySelector('.mobile-menu');

    hamburger.addEventListener('click', e => {
      hamburger.classList.toggle('is-active');
      menuOverlay.classList.toggle('mobile-menu--open');
      e.preventDefault();
    });
  },
};
