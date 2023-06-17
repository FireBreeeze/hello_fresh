$(function(){
   
$('.recipes-slider__inner').slick({
    dots: false,
    arrows: true,
    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 2,
        }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    },
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.10156" y="0.5" width="49" height="49" rx="24.5" fill="white"/><g clip-path="url(#clip0_12_349)"><path d="M25.4674 31.275C25.3606 31.2752 25.2549 31.2542 25.1564 31.2134C25.0578 31.1725 24.9682 31.1126 24.8929 31.037L16.2262 22.3703C16.0739 22.2179 15.9883 22.0113 15.9883 21.7958C15.9883 21.5804 16.0739 21.3737 16.2262 21.2214C16.3786 21.069 16.5852 20.9834 16.8007 20.9834C17.0162 20.9834 17.2228 21.069 17.3752 21.2213L25.4674 29.3136L33.5596 21.2213C33.712 21.0695 33.9185 20.9843 34.1337 20.9845C34.3489 20.9847 34.5552 21.0703 34.7074 21.2225C34.8595 21.3746 34.9451 21.581 34.9453 21.7961C34.9455 22.0113 34.8604 22.2178 34.7085 22.3703L26.0418 31.0369C25.9665 31.1125 25.877 31.1725 25.7784 31.2134C25.6798 31.2542 25.5741 31.2752 25.4674 31.275Z" fill="#067A46"/></g><rect x="1.10156" y="0.5" width="49" height="49" rx="24.5" stroke="#067A46"/><defs><clipPath id="clip0_12_349"><rect width="26" height="26" fill="white" transform="translate(12.6016 12)"/></clipPath></defs></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.10156" y="0.5" width="49" height="49" rx="24.5" fill="white"/><g clip-path="url(#clip0_12_349)"><path d="M25.4674 31.275C25.3606 31.2752 25.2549 31.2542 25.1564 31.2134C25.0578 31.1725 24.9682 31.1126 24.8929 31.037L16.2262 22.3703C16.0739 22.2179 15.9883 22.0113 15.9883 21.7958C15.9883 21.5804 16.0739 21.3737 16.2262 21.2214C16.3786 21.069 16.5852 20.9834 16.8007 20.9834C17.0162 20.9834 17.2228 21.069 17.3752 21.2213L25.4674 29.3136L33.5596 21.2213C33.712 21.0695 33.9185 20.9843 34.1337 20.9845C34.3489 20.9847 34.5552 21.0703 34.7074 21.2225C34.8595 21.3746 34.9451 21.581 34.9453 21.7961C34.9455 22.0113 34.8604 22.2178 34.7085 22.3703L26.0418 31.0369C25.9665 31.1125 25.877 31.1725 25.7784 31.2134C25.6798 31.2542 25.5741 31.2752 25.4674 31.275Z" fill="#067A46"/></g><rect x="1.10156" y="0.5" width="49" height="49" rx="24.5" stroke="#067A46"/><defs><clipPath id="clip0_12_349"><rect width="26" height="26" fill="white" transform="translate(12.6016 12)"/></clipPath></defs></svg></div>',
  });

  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

});

// var mixer = mixitup('.gallery__content');