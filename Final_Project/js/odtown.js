/* Code for slideshow carousel from: http://kenwheeler.github.io/slick/)

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});