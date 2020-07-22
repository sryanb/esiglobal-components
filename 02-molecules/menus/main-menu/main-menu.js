($ => {
  Drupal.behaviors.mainMenu = {
    attach() {
      var $hamburger = $('.hamburger');
      var $menuOverlay = $('.mobile-menu');

      if ($hamburger.length > 0) {
        $hamburger.once().click(function() {
          $(this).toggleClass('is-active');
          $('.mobile-menu').toggleClass('mobile-menu--open');
        });
      }
    },
  };
})(jQuery);

