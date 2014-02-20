function initImg(imgArr) {
  var $imgArr = $(imgArr)[0] ? $(imgArr) : $("[data-init=img]");

  $imgArr.each(function() {
    var $img = $(this).find("img:last"),
    width = $(this).width(),
    height = $(this).height(),
    imgWidth = $img.width(),
    imgHeight = $img.height();

    $(this).css({
      "overflow": "hidden"
    });
    if ($(this).css("position") != "absolute") {
      $(this).css({
        "position": "relative"
      });
    }

    if (imgWidth / width < 1 || imgHeight / height < 1) {
      if (imgWidth / width < imgHeight / height) {

        $img.width(width);
        $img.height("auto");
        $img.css({
          "position": "absolute",
          "left": "0",
          "top": -($img.height() - height) / 2
        });
      } else {

        $img.width("auto");
        $img.height(height);
        $img.css({
          "position": "absolute",
          "top": "0",
          "left": -($img.width() - width) / 2
        });
      }
    } else {
      $img.css({
        "position": "absolute",
        "left": -($img.width() - width) / 2
      });
    }

  });
}

function changeImg(e) {
  var imgUrl = $(this).attr("data-url"),
  newImg = new Image(),
  $self = $(this),
  $imgArr = $mainBg.find("img"),
  curImg = $mainBg.find("img:last");
  if (e) {
    e.stopPropagation();
  }
  if (curUrl == imgUrl) {
    return;
  }

  newImg.onload = function(e) {
    initImg($mainBg);
    $(".load").hide();

    $imgArr.each(function() {
      if ($(this).attr("url") == imgUrl) {
        $(this).hide();
      }
    });

    $(newImg).stop().animate({
      opacity: 1
    },
    1000,
    function() {
      $imgArr.remove();
    });
  }

  newImg.src = imgUrl;
  $(".load").show();
  $(newImg).css("opacity", "0");
  $mainBg.append(newImg);
  curImg.stop().animate({
    opacity: 0
  },
  1000,
  function() {
    curImg.remove();
  });

  curUrl = imgUrl;
}

var $mainBg = $(".main-bg"),
curUrl = $(".wrapper").attr("data-url");

$("[data-url]").on("mouseover",
function(e) {
  changeImg.call(this, e);
});