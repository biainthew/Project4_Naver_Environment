var moForecastData = [23.4, 26.1, 36.9, 46.8, 64.9, 79.3, 100];
var moReductionData = [23.4, 30.6, 23.4, 38.7, 64.9, 79.3, 100];

var tbForecastData = [25.7, 25.7, 29.7, 33.8, 41.2, 45.3, 45.3, 49.3, 56.1, 62.2, 75, 84.4, 95.9, 98, 100];
var tbReductionData = [18.2, 15.5, 18.2, 19.6, 31.8, 33.1, 33.1, 33.1, 35.1, 41.9, 50, 63.5, 79.1, 87.1, 100];

var pcForecastData = [22.5, 24.4, 24.4, 28.2, 28.2, 32, 39.7, 39.7, 39.7, 44, 44, 44, 47.8, 54, 59.8, 72.7, 82.2, 93.3, 97.6, 100];
var pcReductionData = [14.8, 17.2, 14.8, 14.8, 17.2, 19.1, 26.3, 28.2, 30.1, 30.1, 31.1, 31.1, 31.1, 34, 39.7, 47.8, 61.2, 76.1, 84.2, 100];

var _getGraphTemplate = function () {
  return '<span class="graph_bar"></span>';
};
var setGraphHeight = function (el, data, delay) {
  setTimeout(function () {
    $(el).css('height', data + '%');
  }, delay);
}

var mediaFlag = '';
var animationFlag = false;
var forecastData = [];
var reductionData = [];
var moMedia = matchMedia('screen and (max-width: 767px)');
var pcMedia = matchMedia('screen and (min-width: 1024px)');

var initGraphTemplate = function (fData, rData) {
  var forecastTemplate = fData.map(_getGraphTemplate).join('');
  var reductionTemplate = rData
    .map(_getGraphTemplate)
    .map(function (item, index) {
      if (index === 0) {
        return '<span class="graph_bar"><span class="year">2021</span></span>';
      } else if (index === Math.floor(rData.length / 2) && !pcMedia.matches) {
        return '<span class="graph_bar middle"><span class="year">2030</span></span>';
      } else if (index === Math.floor(rData.length / 2) - 1 && pcMedia.matches) {
        return '<span class="graph_bar middle"><span class="year">2030</span></span>';
      } else if (index ===  rData.length - 1) {
        return '<span class="graph_bar"><span class="year">2040</span></span>';
      } else {
        return item;
      }
    })
    .join('');

  $('#forecastGraph').html(forecastTemplate);
  $('#reductionGraph').html(reductionTemplate);
};

var animateGraphMotion = function () {
  $('#forecastGraph .graph_bar').each(function (index) {
    setGraphHeight(this, forecastData[index], index * 30);
  });
  $('#reductionGraph .graph_bar').each(function (index) {
    setGraphHeight(this, reductionData[index], index * 30);
  });
  setTimeout(function () {
    $('.graph_line').addClass('fade_in_line');
    setTimeout(function () {
      $('#reductionGraph').addClass('fade_in_line');
      $('.graph_line').addClass('fade_in_tooltip');
    }, 1000);
  }, 800);
};

var resetGraphAnimation = function () {
  $('.graph_line').removeClass('fade_in_line fade_in_tooltip');
}

var graphResizeHandler = function () {
  if (moMedia.matches) {
    if (mediaFlag !== 'mo') {
      mediaFlag = 'mo';
      forecastData = moForecastData;
      reductionData = moReductionData;
      initGraphTemplate(forecastData, reductionData);
      $('.graph_line .image img').attr('src', 'https://campaign-cdn.pstatic.net/0/campaign/2022/10/environment/img/mo/graph_line.png');
      if (animationFlag) {
        resetGraphAnimation();
        animateGraphMotion();
      }
    }
  } else if (pcMedia.matches) {
    if (mediaFlag !== 'pc') {
      mediaFlag = 'pc';
      forecastData = pcForecastData;
      reductionData = pcReductionData;
      initGraphTemplate(forecastData, reductionData);
      $('.graph_line .image img').attr('src', 'https://campaign-cdn.pstatic.net/0/campaign/2022/10/environment/img/pc/graph_line.png');
      if (animationFlag) {
        resetGraphAnimation();
        animateGraphMotion();
      }
    }
  } else {
    if (mediaFlag !== 'tb') {
      mediaFlag = 'tb';
      forecastData = tbForecastData;
      reductionData = tbReductionData;
      initGraphTemplate(forecastData, reductionData);
      $('.graph_line .image img').attr('src', 'https://campaign-cdn.pstatic.net/0/campaign/2022/10/environment/img/ta/graph_line.png');
      if (animationFlag) {
        resetGraphAnimation();
        animateGraphMotion();
      }
    }
  }
};

// 그래프 데이터 및 이미지 변경
graphResizeHandler();
$(window).on('resize', graphResizeHandler);

// 그래프 라인 너비 리사이즈
var $graphViewer = $('.graph_viewer');
var $graphLine = $('.graph_line');
var $graphImage = $graphLine.find('.animation_area');

var getGraphImageWidth = function () {
  return $graphViewer.width() - parseInt($graphLine.css('left')) - parseInt($graphLine.css('right'));
};

$graphImage.css('width', getGraphImageWidth() + 'px');
$(window).on('resize', function () {
  $graphImage.css('width', getGraphImageWidth() + 'px');
});

// 그래프 애니메이션 스크롤 이벤트
var $winHegiht = $(window).height();
$sectionInitiative = $('.section_initiative').offset().top;

$(window).scroll(function() {
  var $winst = $(this).scrollTop();

  if ($winst + $winHegiht*.75 > $sectionInitiative - 50) {
    setTimeout(function () {
      animationFlag = true;
      animateGraphMotion();
    }, 400);
  }
});