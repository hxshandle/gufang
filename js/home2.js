/**
 * Created by hhuang on 2/16/14.
 */
/**
 * Created by handle on 2/8/14.
 */
(function($) {
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
    'top': (baseY - 20) + 'px'
  });
  $('#homme').css({
    'left': (baseX + 250) + 'px',
    'top': (baseY + 40) + 'px'
  });
  $('#gufang').css({
    'left': (baseX + 30) + 'px',
    'top': (baseY) + 'px'
  });
  $('#xinjie').css({
    'left': (baseX - 90) + 'px',
    'top': (baseY + 70) + 'px'
  });

  // for menu
  $('.menu li').hover(
  function() {
    $('.tl', this).addClass('active');
    $('.cont', this).slideDown();
  },
  function() {
    $('.tl', this).removeClass('active');
    $('.cont', this).stop().slideUp();
  });

  $('.item,.item-first').hover(function(){
    $(this).css({'color':'#fff'});
  },function(){
    $(this).css({'color':'#ccc'});
  });


  $(function(){
    TweenMax.to('.main-logo', 3, {
      opacity: 1,
      ease: Power1.easeInOut,
      onComplete: function() {
        TweenMax.to('.main-logo', 1, {
          top: 270,
          ease: Power1.easeOut,
          onComplete: function() {
            console.log($('.menu :first').data("url"));
            $('.menu :first').trigger("mouseover");
            $('.menu').fadeIn(1000);
          }
        });
      }
    });
    TweenMax.to('.sub', 3, {
      opacity: 0,
      ease: Power1.easeInOut
    });
  });
})(jQuery);

