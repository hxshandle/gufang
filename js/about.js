$(function(){
  $('.point').click(function(){
    var $this = $(this);
    if($this.hasClass('point-act')){
      return;
    }
    var uls = $('.news-outer ul');
    var originalIdx = $('.point-act').data('idx');
    var showIdx = $this.data("idx");
    // change icon
    $('.point-act').removeClass('point-act');
    $this.addClass('point-act');
    TweenMax.to(uls[originalIdx-1],1,{opacity:0});
    TweenMax.to(uls[showIdx-1],1,{opacity:1});
    
    
  });

});
