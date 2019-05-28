$(document).ready(function(){
    $(window).scroll(function(){
        
      if($(window).scrollTop() >= $('header').height()){
        $('.header-row-4').addClass('header-row-4--fixed');
      }
      else {
        $('.header-row-4').removeClass('header-row-4--fixed');
      }
    });


    $('.main-slider').slick({
        dots: true,
        arrows: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            }
        ]
      });

    $('.our-works__slider').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });

    $('.reviews__slider').slick({
      dots: false,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
  });

    $('.gallery__slider').slick({
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      
  });

  $('.team__slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
  ]
  });

  $('.news__slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
  ]
  });
    
});