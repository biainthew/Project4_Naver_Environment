// main1 scroll event
let wheelDelta = 0;
let browser = 0;
let i = 4

$('.main-sec1').on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
    browser = window.navigator.userAgent.toLowerCase().indexOf('firefox');
    if (browser >= 0) {
        wheelDelta = -e.detail * 40;
    } else {
        wheelDelta = e.originalEvent.wheelDelta;
    }
    if (wheelDelta < 0) {
        if (i >= 0) { //01234
            for (i = 4; i >= 0; i--) {
                $('.main-sec1-bg>video').css({
                    'transform': 'scale(1.' + i + ')'
                })
                if (i == 0) {
                    $('html').stop().animate({
                        scrollTop: $('.main-sec2').offset().top
                    }, 2000)
                }
            }
        }
    } else {
        if (i <= 4) { //01234
            for (i = 0; i <= 4; i++) {
                $('.main-sec1-bg>video').css({
                    'transform': 'scale(1.' + i + ')'
                })
            }
        }
    }
});

//nav fixed
$(window).scroll(function() {
    console.log($(document).scrollTop());
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 970) {
        $('#nav').css({
            'position': 'fixed',
            'top': 0
        })
        $('#header').css({
            'background': 'rgba(255, 255, 255, .5)',
            'backdrop-filter': 'blur(15px)'
        })
    } else {
        $('#nav').css({
            'position': 'absolute',
            'top': '100vh'
        })
        $('#header').css({
            'background': 'none',
            'backdrop-filter': 'none'
        })
    }
});

//main-sec2 appear
$(window).scroll(function() {
    if ($(document).scrollTop() > 210) {
        $('.main-sec2-text').stop().animate({
            top: 0
        }, 500);
    } else {
        $('.main-sec2-text').css('top', '100px')
    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() == $('.main-sec2').offset().top) {
        $('.graph-wrap-bottom .graph-bar').eq(0).css('height', '0').stop().animate({
            height: '14.8%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(1).css('height', '0').stop().animate({
            height: '17.2%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(2).css('height', '0').stop().animate({
            height: '14.8%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(3).css('height', '0').stop().animate({
            height: '14.8%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(4).css('height', '0').stop().animate({
            height: '17.2%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(5).css('height', '0').stop().animate({
            height: '19.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(6).css('height', '0').stop().animate({
            height: '26.3%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(7).css('height', '0').stop().animate({
            height: '28.2%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(8).css('height', '0').stop().animate({
            height: '30.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(9).css('height', '0').stop().animate({
            height: '30.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(10).css('height', '0').stop().animate({
            height: '30.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(11).css('height', '0').stop().animate({
            height: '31.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(12).css('height', '0').stop().animate({
            height: '31.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(13).css('height', '0').stop().animate({
            height: '31.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(14).css('height', '0').stop().animate({
            height: '34%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(15).css('height', '0').stop().animate({
            height: '39.7%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(16).css('height', '0').stop().animate({
            height: '47.8%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(17).css('height', '0').stop().animate({
            height: '61.2%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(18).css('height', '0').stop().animate({
            height: '76.1%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(19).css('height', '0').stop().animate({
            height: '84.2%'
        }, 1000)
        $('.graph-wrap-bottom .graph-bar').eq(20).css('height', '0').stop().animate({
            height: '100%'
        }, 1000)

        // graph bar bottom
        $('.graph-wrap-top .graph-bar').eq(0).css('height', '0').stop().animate({
            height: '22.5%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(1).css('height', '0').stop().animate({
            height: '24.4%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(2).css('height', '0').stop().animate({
            height: '24.4%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(3).css('height', '0').stop().animate({
            height: '28.2%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(4).css('height', '0').stop().animate({
            height: '28.2%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(5).css('height', '0').stop().animate({
            height: '32%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(6).css('height', '0').stop().animate({
            height: '39.7%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(7).css('height', '0').stop().animate({
            height: '39.7%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(8).css('height', '0').stop().animate({
            height: '39.7%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(9).css('height', '0').stop().animate({
            height: '44%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(10).css('height', '0').stop().animate({
            height: '44%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(11).css('height', '0').stop().animate({
            height: '44%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(12).css('height', '0').stop().animate({
            height: '47.8%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(13).css('height', '0').stop().animate({
            height: '54%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(14).css('height', '0').stop().animate({
            height: '59.8%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(15).css('height', '0').stop().animate({
            height: '72.7%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(16).css('height', '0').stop().animate({
            height: '82.2%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(17).css('height', '0').stop().animate({
            height: '93.3%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(18).css('height', '0').stop().animate({
            height: '97.6%'
        }, 2000)
        $('.graph-wrap-top .graph-bar').eq(19).css('height', '0').stop().animate({
            height: '100%'
        }, 2000)

        //graph line image
        $('.graph-img').css('width', 0).stop().animate({
            width: '100%'
        }, 2000)
        $('.graph-tooltip').css('opacity', 0).stop().delay(1500).animate({
            opacity: 1
        }, 500)

        //graph number
        $('.graph-wrap-number').css('opacity', 0).stop().animate({
            opacity: 1
        }, 500, 'easeInOutCubic')
        $('.number1 .number-wrap').css('top', 0).stop().animate({
            top: '-648px'
        }, 3000, 'easeInOutCubic');
        $('.number2 .number-wrap').css('top', 0).stop().animate({
            top: '-972px'
        }, 3000, 'easeInOutCubic');

        //graph middle line
        $('.graph-wrap-middle').css('opacity', 0).stop().animate({
            opacity: 1
        }, 2000, 'easeInOutCubic')

        //graph legend
        $('.graph-wrap-legend').css('opacity', 0).stop().animate({
            opacity: 1
        }, 2000, 'easeInOutCubic')

        //graph bottom text
        $('.graph-wrap-bottomt').css('opacity', 0).stop().delay(1500).animate({
            opacity: 1
        }, 500)
    }
});

//main-sec3 scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 1245) {
        $('.main-sec3-text').stop().animate({
            top: 0
        }, 500);
    } else {
        $('.main-sec3-text').css('top', '100px');
    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 1560) {
        $('.main-sec3-video').stop().animate({
            top: 0
        }, 500);
    } else {
        $('.main-sec3-video').css('top', '100px');
    }
});

//main-sec4 number
$(window).scroll(function() {
    if ($(document).scrollTop() > 2150) {
        $('.main-sec4-text').stop().animate({
            top: 0
        }, 500);
    } else {
        $('.main-sec4-text').css('top', '100px');
    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 2380) {
        $('.main-sec4-left, .main-sec4-right').stop().animate({
            top: 0
        }, 500);
    } else {
        $('.main-sec4-left, .main-sec4-right').css('top', '100px');
    }
})
$(window).scroll(function() {
    if ($(document).scrollTop() > 2380 && $(document).scrollTop() < 2820) {
        $('.main-sec4-left-wrap .number-wrap1').css('top', 0).stop().animate({
            top: '-162px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-left-wrap .number-wrap2').css('top', 0).stop().animate({
            top: '-729px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-right-wrap1 .number-wrap3').css('top', 0).stop().animate({
            top: '-162px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-right-wrap1 .number-wrap4').css('top', 0).stop().animate({
            top: '-729px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-right-wrap2 .number-wrap5').css('top', 0).stop().animate({
            top: '-648px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-right-wrap2 .number-wrap6').css('top', 0).stop().animate({
            top: '-324px'
        }, 3000, 'easeInOutCubic');
        $('.main-sec4-right-wrap2 .number-wrap7').css('top', 0).stop().animate({
            top: '-810px'
        }, 3000, 'easeInOutCubic');
    } else if ($(document).scrollTop() > 2821) {
        $('.main-sec4-left-wrap .number-wrap1').css('top', '-162px')
        $('.main-sec4-left-wrap .number-wrap2').css('top', '-729px')
        $('.main-sec4-right-wrap1 .number-wrap3').css('top', '-162px')
        $('.main-sec4-right-wrap1 .number-wrap4').css('top', '-729px')
        $('.main-sec4-right-wrap2 .number-wrap5').css('top', '-648px')
        $('.main-sec4-right-wrap2 .number-wrap6').css('top', '-324px')
        $('.main-sec4-right-wrap2 .number-wrap7').css('top', '-810px')
    }
});