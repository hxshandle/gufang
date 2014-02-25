var VH = $(window).height(),
    offset = 159;
function initLayout(minHeight){
  var vh = VH < minHeight ? minHeight:VH;
  var _h = vh-159;
  $('.main').css({height:_h+'px'});
  $('.main .left,.main .right').css({height:_h+'px'});
  $('.cont').css({paddingTop:(_h-360)/2+'px'});

}
