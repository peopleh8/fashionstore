$(function () {
  $('.header__selected-text').on('click', function () {
    $('.header__select-section').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.header__select-text').on('click', function () {
    var hash = "#" + $(this).attr('for');
    var inputTarget = $(hash);
    var inputVal = inputTarget.val();
    var thisText = $(this).text();
    $('.header__selected-input').val(inputVal);
    $('.header__selected-text').text(thisText);
    $('.header__select-section').removeClass('active');
    $('.header__selected-text').removeClass('active');
  });

  $('.product__rate-item, .other__slider-rate-item').on('click', function() {
    $(this).parent().attr('data-total-rate', $(this).attr('data-item-rate'));
  });

  $('.other__nav-item').on('click', function() {
    $('.other__nav-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.header__burger-menu').on('click', function() {
    $('.header__nav-menu').toggleClass('active');
    $('.header__burger-top-item').toggleClass('active');
    $('.header__burger-mid-item').toggleClass('active');
    $('.header__burger-bot-item').toggleClass('active');
  });

  /* Sliders */

  $('.intfo__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 850
  });

  $('.product__slider').slick({
    arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1126,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.other__slider').slick({
    arrows: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 532,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});