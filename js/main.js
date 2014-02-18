var curBg = null;
function changeBg(id){
  if(!id || curBg == id){
    return;
  }
  $('#'+curBg).animate({opacity:0},500).hide();
  $('#'+id).css({opacity:0}).animate({opacity:1},500);
  curBg = id;


}
