(function ($) {

    "use strict";
    new WOW().init();
// menu fix start
var mapping = $('.main-menu').offset().top;

$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > mapping) {
    $('.main-menu').addClass('menu_fix');
  } else {
    $('.main-menu').removeClass('menu_fix');
  }

});


// menu fix start

 // banner slider start
 $('.banner-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  fade: true,
});

// banner slider end



// venobox video start
$('.venobox').venobox({
  spinner: 'cube-grid',
  spinColor: '#eb5e24',
  arrowsColor: 'brown',
  bgcolor: '#eb5e24',
  border: '6px',
  overlayColor: 'rgba(73, 173, 206, 0.6)',
});

// venobox video end


     // preloader
     $(window).on('load', function () {
      $('.preloader').delay(1000).fadeOut(1000);

  });


 
}(jQuery));

