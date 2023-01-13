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
}); //main1 scroll end

//nav fixed
let main2OT = $('.main-sec2').offset().top;
let num = 800;
let num2 = 500;
console.log('document : ' + $(window).scrollTop()+ ',' + 'main2 : ' + main2OT)
$(window).scroll(function() {
    if ($(document).scrollTop() >= main2OT) {
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
$(window).scroll(function() {
    if ($(document).scrollTop() == main2OT) {
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

        // graph bar top
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
$(window).scroll(function(){
    if($(window).scrollTop()==main2OT){
        $('.main-sec2 .number-wrap').addClass('addParallax')
    }else{
        $('.main-sec2 .number-wrap').removeClass('addParallax')
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
        $('.main-sec4-left').stop().animate({
            top: 0
        }, 500);
        setTimeout(function(){
            $('.main-sec4-right-wrap1').stop().animate({top:0},500)
        },300)
        setTimeout(function(){
            $('.main-sec4-right-wrap2').stop().animate({top:0},500)
        },600)
    } else {
        $('.main-sec4-left').css('top', '100px');
        $('.main-sec4-right-wrap1').css('top', '100px');
        $('.main-sec4-right-wrap2').css('top', '100px');
    }
})
let main4OT = $('.main-sec4').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>= main4OT){
        $('.main-sec4 .number-wrap').addClass('addParallax');
    }else{
        $('.main-sec4 .number-wrap').removeClass('addParallax');
    }
})
//mainsec5
let main5TOT = $('.main-sec5').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>= main5TOT-num){
        $('.main-sec5-text').stop().animate({top:0},500)
    }else{
        $('.main-sec5-text').css('top', '100px');
    }
});
let main5COT = $('.main-sec5-cont').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>= main5TOT-num2){
        $('.main-sec5-cont-box1').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec5-cont-box2').stop().animate({top:0},500)
        },300)
        setTimeout(function(){
            $('.main-sec5-cont-box3').stop().animate({top:0},500)
        },600)
    }else{
        $('.main-sec5-cont-box1').css('top', '100px');
        $('.main-sec5-cont-box2').css('top', '100px');
        $('.main-sec5-cont-box3').css('top', '100px');
    }
})
//mainsec6
let main6OT = $('.main-sec6').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop() >= main6OT-num2){
        $('.main-sec6 .main-sec6-text').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec6 .main-sec6-img').stop().animate({top:0},500)
        },300)
    }else{
        $('.main-sec6 .main-sec6-text').css('top', '100px');
        $('.main-sec6 .main-sec6-img').css('top', '100px');
    }
})

// mainsec6 number
let main6COT = $('.main-sec6 .container2').offset().top;
// $(window).scroll(function(){
//     if($(window).scrollTop()>=main6OT){
//         $('.main-sec6-box .number-wrap').addClass('addParallax')
//     }else{
//         $('.main-sec6-box .number-wrap').removeClass('addParallax')
//     }
// })
$(window).scroll(function(){
    if($(document).scrollTop() >= main6COT-num2){
        $('.main-sec6 .main-sec6-box1').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec6 .main-sec6-box2').stop().animate({top:0},500)
        },300)
    }else{
        $('.main-sec6 .main-sec6-box1').css('top', '100px');
        $('.main-sec6 .main-sec6-box2').css('top', '100px');
    }
})
let main6BOT = $('.main-sec6 .main-sec6-box3').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop() >= main6BOT-num2){
        $('.main-sec6 .main-sec6-box3').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec6 .main-sec6-box4').stop().animate({top:0},500)
        },300)
        $('.main-sec6-box .number-wrap').addClass('addParallax')
    }else{
        $('.main-sec6 .main-sec6-box3').css('top', '100px');
        $('.main-sec6 .main-sec6-box4').css('top', '100px');
        $('.main-sec6-box .number-wrap').removeClass('addParallax')
    }
})
//main-sec7
let main7OT = $('.main-sec7').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop()>=main7OT-num2){
        $('.main-sec7-text').stop().animate({top:0},500)
    }else{
        $('.main-sec7-text').css('top', '100px');
    }
});
let main7COT = $('.main-sec7-cont1').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop()>=main7COT-num2){
        $('.main-sec7-cont1 .main-sec7-cont-left').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec7-cont1 .main-sec7-cont-right-top').stop().animate({top:0},500)
        },300)
        $('.main-sec7 .main-sec7-cont1 .number-wrap').addClass('addParallax')
        setTimeout(function(){
            $('.main-sec7-cont1 .main-sec7-cont-right-bottom').stop().animate({top:0},500)
        },600)
    }else{
        $('.main-sec7-cont1 .main-sec7-cont-left').css('top', '100px');
        $('.main-sec7-cont1 .main-sec7-cont-right-top').css('top', '100px');
        $('.main-sec7 .main-sec7-cont1 .number-wrap').removeClass('addParallax')
        $('.main-sec7-cont1 .main-sec7-cont-right-bottom').css('top', '100px');
    }
});
let main7COT2 = $('.main-sec7-cont2').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop()>=main7COT2-num2){
        $('.main-sec7-cont2 .main-sec7-cont-left').stop().animate({top:0},500)
        setTimeout(function(){
            $('.main-sec7-cont2 .main-sec7-cont-right-top').stop().animate({top:0},500)
        },300)
        $('.main-sec7 .main-sec7-cont2 .number-wrap').addClass('addParallax')
        setTimeout(function(){
            $('.main-sec7-cont2 .main-sec7-cont-right-bottom').stop().animate({top:0},500)
        },600)
    }else{
        $('.main-sec7-cont2 .main-sec7-cont-left').css('top', '100px');
        $('.main-sec7-cont2 .main-sec7-cont-right-top').css('top', '100px');
        $('.main-sec7 .main-sec7-cont2 .number-wrap').removeClass('addParallax')
        $('.main-sec7-cont2 .main-sec7-cont-right-bottom').css('top', '100px');
    }
});