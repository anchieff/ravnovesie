$(function(){
  // Слайдер
  $('.programs__content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    cssEase: 'ease-in-out',
    dots: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
  });


  //Табы
  // $('.price__tab').click(function(e){
  //   e.preventDefault();

  //   $('.price__tab').removeClass('tab--active');
  //   $('.price-content__item').removeClass('price-content__item--active');

  //   $(this).addClass('tab--active');
  //   $($(this).attr('href')).addClass('price-content__item--active');
  // });

  // $('.price__tab:first').click();

  // $('.timetable-tab').click(function(e){
  //   e.preventDefault();

  //   $('.timetable-tab').removeClass('tab--active');
  //   $('.timetable__item').removeClass('timetable__item--active');

  //   $(this).addClass('tab--active');
  //   $($(this).attr('href')).addClass('timetable__item--active');
  // });

  // $('.timetable-tab:first').click();


  //Слайдер
  $('.instructors-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
  });
});

