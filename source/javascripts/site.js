// This is where it all goes :)
sr.reveal('.img-reveal', { duration: 1500 });

$(document).ready(function(){
    $('.property-img-wrapper').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.testimonial-content').slick({
      dots: false,
      infinite: true,
      speed: 600,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
    });
  });

