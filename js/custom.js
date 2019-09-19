
// AOS
AOS.init({
	offset: 200,
	duration: 600,
	easing: 'ease-out-cubic',
	delay: 100,
});
	AOS.refresh();




$(document).on('ready', function() {
  $(".slide-con").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 5000,
      
      
  });

 $(".testimonals-con").slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
     autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
      
      
  });
  $('.slick-carousal').slick({
    arrows:true,
    slidesToShow: 4,
      dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
            dots: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
            dots: false,
          slidesToShow: 1
        }
      }
    ]
  });
          
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   //$(this).addClass('active');
   $('#overlay').toggleClass('open');
    //$('#overlay').addClass('open');
  });
});