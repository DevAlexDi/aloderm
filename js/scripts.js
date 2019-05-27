$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        arrows: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1199,
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
        slidesToScroll: 1

        // responsive: [
        //     {
        //       breakpoint: 1199,
        //       settings: {
        //         arrows: false
        //       }
        //     }
        // ]
    });

    $('.reviews__slider').slick({
      dots: false,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1

      // responsive: [
      //     {
      //       breakpoint: 1199,
      //       settings: {
      //         arrows: false
      //       }
      //     }
      // ]
  });

    $('.gallery__slider').slick({
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1

      // responsive: [
      //     {
      //       breakpoint: 1199,
      //       settings: {
      //         arrows: false
      //       }
      //     }
      // ]
  });

  $('.team__slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1

    // responsive: [
    //     {
    //       breakpoint: 1199,
    //       settings: {
    //         arrows: false
    //       }
    //     }
    // ]
  });
    
});