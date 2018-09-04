// This is where it all goes :)
sr.reveal('.img-reveal', { duration: 1500 });

$(document).ready(function(){
    $('.property-img-wrapper').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
    });
  });

