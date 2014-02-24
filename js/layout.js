$(function(){
  var vh = $(window).height();
  // for gufang.html
  vh = vh < 700 ? 700:vh;
  var _h = vh-159;
  $('.main').css({height:_h+'px'});
  $('.cont').css({paddingTop:(_h-360)/2+'px'});
  // END for gufang.html
});
