
// Aos Init 
AOS.init();
$('.nav, .list_wrap_nav').scrollToAnchor({
    speed: 5000
});

let $backToTop = $(".backToTop");
$backToTop.hide();

 $(window).on('scroll', function() {
  if ($(this).scrollTop() > 200) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

// Click event to scroll to top.
$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});
// Carousel Init For Header
jQuery("#testimonials").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    items: 1,
    autoplayHoverPause:true,
    mouseDrag: false,
    navText: ["<img src='assets/img/icon/slide-left.png'>","<img src='assets/img/icon/slide-right.png'>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
});