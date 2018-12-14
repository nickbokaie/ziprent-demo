// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

//Headroom Config

// grab an element
var elem = document.querySelector("nav");
// construct an instance of Headroom, passing the element

var headroom = new Headroom(elem);

// initialise
headroom.init(); 

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




