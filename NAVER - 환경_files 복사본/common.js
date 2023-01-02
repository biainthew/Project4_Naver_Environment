$(document).ready(function() {
  //상단 타이틀 노출(fade-in)
  setTimeout(function () {
    $(".header").addClass("fade_in");
    $(".scroll_arrow").addClass("fade_in");
    return false;
  }, 0);

  setTimeout(function () {
    $(".scroll_arrow").addClass("moving");
    return false;
  }, 2000);
});

// gnb_menu item 클릭 시,
document.querySelector('.nav_menu_list').addEventListener("click", e => {
  e.preventDefault();
  const origin = e.currentTarget;
  const target = e.target;
  const navMenu = $('.header').height();

  if (target.tagName === 'A') {

    if (isMobile()) {
      if (!matchMedia("(min-width: 768px)").matches) {
        $('.wrap').toggleClass('nav_menu_open');
        $('body').removeClass('hidden');
      }
    }

    $('html, body').animate({
      scrollTop: $(target.hash).offset().top - navMenu
    }, 1000);
  }
});

$(window).scroll(function () {
  const navMenu = $('.header').height();
  const nowHeight = Number(($(document).scrollTop() + navMenu).toFixed(0));
  const tab = $('.nav_menu_item');

  const hashes = [
    Number($("#sectionInitiative").offset().top.toFixed(0)) - 5,
    Number($("#sectionDigital").offset().top.toFixed(0)) - 5,
    Number($("#sectionCommerce").offset().top.toFixed(0)) - 5,
    Number($("#sectionInfra").offset().top.toFixed(0)) - 5,
    Number($("#sectionService").offset().top.toFixed(0)) - 5,
    Number($("#sectionEvent").offset().top.toFixed(0)) - 5,
    Number($("#sectionReport").offset().top.toFixed(0)) - 5,
  ]

  if (nowHeight >= hashes[6]) {
    tab.removeClass('on');
    tab.eq(6).addClass('on');
  } else if (nowHeight >= hashes[5]) {
    tab.removeClass('on');
    tab.eq(5).addClass('on');
  } else if (nowHeight >= hashes[4]) {
    tab.removeClass('on');
    tab.eq(4).addClass('on');
  } else if (nowHeight >= hashes[3]) {
    tab.removeClass('on');
    tab.eq(3).addClass('on');
  } else if (nowHeight >= hashes[2]) {
    tab.removeClass('on');
    tab.eq(2).addClass('on');
  } else if (nowHeight >= hashes[1]) {
    tab.removeClass('on');
    tab.eq(1).addClass('on');
  } else if (nowHeight >= hashes[0]) {
    tab.removeClass('on');
    tab.eq(0).addClass('on');
  }

});

$('.logo_link_naver').click(function (e) {
  e.preventDefault();

  if (isMobile()) {
    location.href = "https://m.naver.com";
  } else {
    location.href = "https://www.naver.com";
  }
})

$('.logo_link_page').click(function (e) {
  e.preventDefault();
  location.reload();
})


$(".scroll_arrow").click(function(e) {
  event.preventDefault();
  let target = $(this.hash);
  $('html,body').animate({scrollTop:target.offset().top}, 1200);
});

$('.accordion_header .toggle_btn').click(function() {
  $(this).parent().toggleClass('on');
});

$('.btn_menu').click(function() {
  if (!matchMedia("(min-width: 768px)").matches) {
    $('.wrap').toggleClass('nav_menu_open');
    $('body').toggleClass('hidden');
  }
});

$('.source_mark').click(function() {
  $('.accordion_header').addClass('on');
});

$('#copy').click(function (e) {
  e.preventDefault();
  const copy = $('.hashtag.accent_eb').text();
  window.navigator.clipboard.writeText(copy).then(() => {
    console.log(copy);
  });
})