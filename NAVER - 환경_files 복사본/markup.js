var scroll = $(window).scrollTop();
var scrollHeight = $(this).prop('scrollHeight');
var $winHegiht = $(window).height();

var $navMenu = $('.nav_menu_area').offset().top;
var $sectionInitiative = $('.section_initiative').offset().top;
var $secDigital = $('.section_digital').offset().top;
var $secDigitalListMulti = $('.section_digital .card_list.type_multi').offset().top;
var $secCommerce = $('.section_commerce').offset().top;
var $secInfra = $('.section_infra').offset().top;
var $secService = $('.section_service').offset().top;
var $secServiceSlide = $('.section_service .slide_area').offset().top;
var $secEventSpot = $('.event_spot').offset().top;
var $secReport = $('.section_report').offset().top;
var $cardViewMulti = $('.card_view_area .type_multi').offset().top;

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
  $(window).on('orientationchange', function () {
    $('body').removeClass('hidden');
    $('.wrap').removeClass('nav_menu_open');

    $winHegiht = screen.height;
  })
}

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
  initSwiper2();
});

$(window).scroll(function() {
  var $winst = $(this).scrollTop();
  var odometer = document.querySelectorAll(".odometer");

  $navMenu = $('.nav_menu_area').offset().top;
  $sectionInitiative = $('.section_initiative').offset().top;
  $secDigital = $('.section_digital').offset().top;
  $secDigitalListMulti = $('.section_digital .card_list.type_multi').offset().top;
  $secCommerce = $('.section_commerce').offset().top;
  $secInfra = $('.section_infra').offset().top;
  $secService = $('.section_service').offset().top;
  $secServiceSlide = $('.section_service .slide_area').offset().top;
  $secEventSpot = $('.event_spot').offset().top;
  $secReportInfo = $('.section_report .report_info').offset().top;
  $cardViewMulti = $('.card_view_area .type_multi').offset().top;

  //헤더 스크롤 시 클래스 제어
  if(matchMedia("(min-width: 768px)").matches){
    if ($winst + $winHegiht*.05 > $navMenu) {
      $(".header").addClass("scoll");
    } else {
      $(".header").removeClass("scoll");
    }
  }
  if(matchMedia("(max-width: 767px)").matches){
    if ($winst + $winHegiht*.05 > $sectionInitiative) {
      $(".header").addClass("scoll");
    } else {
      $(".header").removeClass("scoll");
    }
  }

  $('.card_view_area li').not('.card_view_area .type_multi li').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if( bottom_of_window > bottom_of_object){
      $(this).addClass('fade_in_up');
    } else {
      $(this).removeClass('fade_in_up');
    }
  });

  // pc
  $('.odometerFloating').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if( bottom_of_window > bottom_of_object){
      setTimeout(function(){
        odometer[0].innerHTML = 60;
      }, 2550);
    } else {
      setTimeout(function(){
        odometer[0].innerHTML = 00;
      });
    }
  });

  // pc
  if(matchMedia("(min-width: 768px)").matches){
    $('.section_commerce .card_item.align_center').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[5].innerHTML = 630;
          odometer[6].innerHTML = 182;
        });
      } else {
        setTimeout(function(){
          odometer[5].innerHTML = 0;
          odometer[6].innerHTML = 0;
        });
      }
    });

    $('.section_infra .odometer05').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[7].innerHTML = 33989;
        });
      } else {
        setTimeout(function(){
          odometer[7].innerHTML = 0;
        });
      }
    });

    $('.section_infra .odometer06').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[8].innerHTML = 123;
        });
      } else {
        setTimeout(function(){
          odometer[8].innerHTML = 0;
        });
      }
    });

    $('.card_view_area .type_multi').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object){
        $(this).children().addClass('fade_in_up');
      } else {
        $(this).children().removeClass('fade_in_up');
      }
    });
  }

  // ta ~ mo
  if(matchMedia("(max-width: 767px)").matches){
    $('.odometer00').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[1].innerHTML = 2;
          odometer[2].innerHTML = 9;
        });
      } else {
        setTimeout(function(){
          odometer[1].innerHTML = 0;
          odometer[2].innerHTML = 0;
        });
      }
    });

    $('.odometer01').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[3].innerHTML = 29;
        });
      } else {
        setTimeout(function(){
          odometer[3].innerHTML = 0;
        });
      }
    });

    $('.odometer02').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[4].innerHTML = 840;
        });
      } else {
        setTimeout(function(){
          odometer[4].innerHTML = 0;
        });
      }
    });

    $('.odometer03').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[5].innerHTML = 630;
        });
      } else {
        setTimeout(function(){
          odometer[5].innerHTML = 0;
        });
      }
    });

    $('.odometer04').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[6].innerHTML = 182;
        });
      } else {
        setTimeout(function(){
          odometer[6].innerHTML = 0;
        });
      }
    });

    $('.odometer05').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[7].innerHTML = 33989;
        });
      } else {
        setTimeout(function(){
          odometer[7].innerHTML = 0;
        });
      }
    });

    $('.odometer06').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object){
        setTimeout(function(){
          odometer[8].innerHTML = 123;
        });
      } else {
        setTimeout(function(){
          odometer[8].innerHTML = 0;
        });
      }
    });

    $('.card_view_area .type_multi li').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object){
        $(this).addClass('fade_in_up');
      } else {
        $(this).removeClass('fade_in_up');
      }
    });
  }

  // section_initiative
  if ($winst + $winHegiht*.75 > $sectionInitiative - 50) {
    $('.section_initiative .text_area').addClass('fade_in_up');
    $('.section_initiative .hilight').addClass('on');

    $('.graph_desc').addClass('fade_in');
    $('.reduction_box').addClass('fade_in');
  } else {
    $('.section_initiative .text_area').removeClass('fade_in_up');
    $('.section_initiative .hilight').removeClass('on');

    $('.graph_desc').removeClass('fade_in');
    $('.reduction_box').removeClass('fade_in');
  }

  // section_digital
  if ($winst + $winHegiht*.75 > $secDigital - 50) {
    $('.section_digital .text_area').addClass('fade_in_up');

    $('.section_digital .section_sub_title').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object){
        $(this).addClass('fade_in_up');
      } else {
        $(this).removeClass('fade_in_up');
      }
    });
  } else {
    $('.section_digital .text_area').removeClass('fade_in_up');
  }

  // section_digital list multi
  if ($winst + $winHegiht*.75 > $secDigitalListMulti - 50) {
    $('.card_item').each( function(i){
      setTimeout(function(){
        odometer[1].innerHTML = 2;
        odometer[2].innerHTML = 9;
        odometer[3].innerHTML = 29;
        odometer[4].innerHTML = 840;
      });
    });
  } else {
    $('.card_item').each( function(i){
      setTimeout(function(){
        odometer[1].innerHTML = 0;
        odometer[2].innerHTML = 0;
        odometer[3].innerHTML = 0;
        odometer[4].innerHTML = 0;
      });
    });
  }

  if ($winst + $winHegiht*.75 > $secCommerce - 50) {
    $('.section_commerce .text_area').addClass('fade_in_up');
  } else {
    $('.section_commerce .text_area').removeClass('fade_in_up');
  }

  // section_infra
  if ($winst + $winHegiht*.75 > $secInfra - 50) {
    $('.section_infra .text_area').addClass('fade_in_up');
  } else {
    $('.section_infra .text_area').removeClass('fade_in_up');
  }

  // section_service
  if ($winst + $winHegiht*.75 > $secService - 50) {
    $('.section_service .text_area').addClass('fade_in_up');
  } else {
    $('.section_service .text_area').removeClass('fade_in_up');
  }
  if ($winst + $winHegiht*.75 > $secServiceSlide) {
    $('.section_service .slide_area').addClass('fade_in_up');
  } else {
    $('.section_service .slide_area').removeClass('fade_in_up');
  }

  if ($winst + $winHegiht*.75 > $secEventSpot - 50) {
    $('.event_spot .text_area').addClass('fade_in_up');
  } else {
    $('.event_spot .text_area').removeClass('fade_in_up');
  }

  $('.report_sentence .bg_thumb_box').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object){
      $(this).addClass('fade_in_up');
    } else {
      $(this).removeClass('fade_in_up');
    }
  });

  $('.report_info .info_list li').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object){
      $(this).addClass('fade_in_up');
    } else {
      $(this).removeClass('fade_in_up');
    }
  });

  $('.report_info .info_record').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object){
      $(this).addClass('fade_in_up');
    } else {
      $(this).removeClass('fade_in_up');
    }
  });

  $('.report_notice').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object){
      $(this).addClass('fade_in_up');
    } else {
      $(this).removeClass('fade_in_up');
    }
  });
});

// swiper
var ww = $(window).width();
var mySwiper1 = undefined;
var mySwiper3 = undefined;

function initSwiper() {
  if (ww < 767 && mySwiper1 == undefined) {
    mySwiper1 = new Swiper(".mySwiper1", {
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    $('.swiper-pagination').show();
  } else if (ww >= 768 && mySwiper1 != undefined) {
    mySwiper1.destroy();
    mySwiper1 = undefined;
    $('.swiper-pagination').hide();
  }
}
initSwiper();

function initSwiper2() {
  if (ww < 1599 && mySwiper3 == undefined) {
    mySwiper3 = new Swiper(".mySwiper3", {
      grabCursor: true,
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
      freeMode: true,
      initialSlide: 1,
    });
  } else if (ww >= 1599 && mySwiper1 != undefined) {
    mySwiper3.destroy();
    mySwiper3 = undefined;
  }
}
initSwiper2();

var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints : {
    1599 : {
      spaceBetween: 40,
    },
    1023 : {
      spaceBetween: 36,
      slidesPerView: "auto",
    },
    320 : {
      spaceBetween: 20,
      slidesPerView: "auto",
    },
  },
});

// gsap
//pc
var $bg = document.querySelectorAll(".spot .bg");
var tl;
var tl2;

if(matchMedia("(min-width: 1600px)").matches){
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".spot",
      pin: true,
      pinSpacing: true,
      scrub: 0.6,
      start: "top top",
      end: "+=60%",
    }
  });

  tl.from($bg, {scale: '1.6', duration: 2.5,})
      .to($bg, {scale: '1', duration: 2.5, ease: "power2.out",});

  tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger_bt",
      scrub: 0.4,
      start: "top",
      end: "+=100%",
    }
  });

  tl2.to($bg, {scale: '1', duration: 0.5,})
      .to($bg, {scale: '1.2', duration: 1.5});
}

//tablet ~ mo
if(matchMedia("(max-width: 1599px)").matches) {
  var capturedScrollY = 0;
  var oriChangeFlag = false;
  var scrollChangeFlag = true;

  $(window).on('scroll', function () {
    if (scrollChangeFlag) {
      capturedScrollY = window.scrollY;
    }
  })

  $(window).on('orientationchange', function() {
    scrollChangeFlag = false;
    oriChangeFlag = true;
  })

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".spot",
      pin: true,
      pinSpacing: true,
      scrub: 0.6,
      start: "top top",
      end: "+=60%",
    }
  });

  tl.from($bg, {scale: '1.38', duration: 2.5,})
    .to($bg, {scale: '1', duration: 2.5, ease: "power2.out",});

  tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger_bt",
      scrub: 0.4,
      start: "top",
      end: "+=100%",
      onRefresh: function () {
        if (oriChangeFlag) {
          window.scrollTo(0, capturedScrollY);
          oriChangeFlag = false;
          scrollChangeFlag = true;
        }
      }
    }
  });

  tl2.to($bg, {scale: '1', duration: 0.5,})
    .to($bg, {scale: '1.12', duration: 1.5});
}

$('.layer_pop .source_mark').click(function() {
  $('.layer_pop').removeClass('on');
  $('.dimmed').removeClass('on');
  $('body').removeClass('hidden');
});