/**
 * Created by hhuang on 2/16/14.
 */
/**
 * Created by handle on 2/8/14.
 */
(function ($) {
  var vh = $(window).height(),
      vw = $(window).width();

  //center the main logo
  var LOGO_WIDTH = 488,
      LOGO_HEIGHT = 101;
  var baseX = ((vw - LOGO_WIDTH) / 2),
      baseY = ((vh - LOGO_HEIGHT) / 2);

  $('.main-logo').css({
    'left': baseX + 'px',
    'top': baseY + 'px',
    'opacity': 0.1
  });

  $('#commune').css({
    'left': (baseX + 300) + 'px',
    'top': (baseY-20) + 'px'
  });
  $('#homme').css({
    'left': (baseX + 250) + 'px',
    'top': (baseY + 40) + 'px'
  });
  $('#gufang').css({
    'left': (baseX + 30) + 'px',
    'top': (baseY ) + 'px'
  });
  $('#xinjie').css({
    'left': (baseX - 90) + 'px',
    'top': (baseY + 70) + 'px'
  });


  var centerX = vw / 2 - 100, centerY = vh / 2-20, a = 300, b = 100, t = 0;
  function ovalTrans() {
    var t1 = t + 45, t2 = t + 135, t3 = t + 225, t4 = t + 315;
    var ts = [t , t + 30, t + 60, t+90 ];
    var coordinates = $.map(ts, function (_t) {
      var ret = new Array();
      ret[0] = centerX + a * Math.cos(_t);
      ret[1] = centerY + b * Math.sin(_t);
      return ret;
    });

    $('#commune').css({
      'left': coordinates[0] + 'px',
      'top': coordinates[1] + 'px'
    });
    $('#homme').css({
      'left': coordinates[2] + 'px',
      'top': coordinates[3] + 'px'
    });
    $('#gufang').css({
      'left': coordinates[4] + 'px',
      'top': coordinates[5] + 'px'
    });
    $('#xinjie').css({
      'left': coordinates[6] + 'px',
      'top': coordinates[7] + 'px'
    });
    t += 0.002;
  }


  /*
  var intervaler = setInterval(function () {
    ovalTrans();
  });
  */


  // init menu
  $('.menu').jMenu();
  // Handle menu bg change
  $('.menu a').hover(function (event) {
    var $this = $(this);
    var bgEl = $this.data('bg');
    if (bgEl) {
      $('.div-bg.active').removeClass('active');
      $(bgEl).addClass('active');
    }
  });

  // hidden menu first
  $('.menu').hide();
  $('.div-bg').addClass("none");

  //rumble
  //$('.sub').jrumble();
  $('.sub').hover(function () {
    $(this).trigger('startRumble');
  }, function () {
    $(this).trigger('stopRumble');
  });


  $('#start').click(function () {
    TweenMax.to('.main-logo', 3, {
      opacity: 1,
      ease: Power1.easeInOut,
      onComplete: function () {
        TweenMax.to('.main-logo', 1, {top: 200,
          ease: Power1.easeOut,
          onComplete: function () {
            $('.div-bg').removeClass('none');
            $('.div-bg').filter(':first').fadeIn(1500, function () {
              $('.menu').fadeIn(1000);
            });
          }});
      }
    });
    TweenMax.to('.sub', 3, {
      opacity: 0,
      ease: Power1.easeInOut
    });
  });
})(jQuery);

