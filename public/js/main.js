$(function () {
  particlesJS.load('particles-js', 'js/particles_config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(document).scroll(function () {
    /* Change nav background on scroll */
    var $nav = $("nav");
    $nav.toggleClass('fill', $(this).scrollTop() > $nav.height());

    $('section').each( function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object - 1000) {
        $(this).animate({ 'opacity' : '1' }, 500);       
      }
    })
  });

  /* navigate to section */
  $(".nav-link").click(function(e) {
    var sectionTarget = $(this).attr("href");

    $(".nav-link").removeClass("active")
    $(this).addClass("active");
    $(".hamburger-container").removeClass("active");
    $(".mobile-menu-container").removeClass("active");

    $('body, html').animate({
      scrollTop: $(sectionTarget).offset().top
    }, 1000);
  });

  $(".hamburger-container").click(function(e) {
    $(this).toggleClass("active");
    $(".mobile-menu-container").toggleClass("active");
  });
});