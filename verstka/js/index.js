$(document).ready(() => {
  let containerWidth = Math.ceil($(window).width() - $(window).width() * 0.3);
  const framesCount = $(".subheader-text").length;

  $(".subheader-text").width(containerWidth + "px");

  console.log(framesCount);

  let leftChord = 0;
  let currentFrame = 1;

  $("#switchSubheaderRight").on("click", (e) => {
    e.preventDefault();

    if (currentFrame < framesCount) {
      leftChord = leftChord - containerWidth;
      currentFrame++;
    } else {
      leftChord = 0;
      currentFrame = 1;
    }

    $("#subheaderCaroosel").css("left", leftChord + "px");
  });
  $("#switchSubheaderLeft").on("click", (e) => {
    e.preventDefault();

    if (currentFrame <= 1) {
      leftChord = containerWidth * -2;
      currentFrame = framesCount;
    } else {
      leftChord += containerWidth;
      currentFrame--;
    }
    $("#subheaderCaroosel").css("left", leftChord + "px");
  });

  //DZ: left btn event

  $(window).resize(() => {
    containerWidth = Math.ceil($(window).width() - $(window).width() * 0.3);
    $(".subheader-text").width(containerWidth + "px");
    $(".service").width(containerWidth/3 - 30 + "px");

    leftSide = containerWidth/(-9);
    $("#services").css("left", leftSide + "px");
  });

  $(".service").width(containerWidth/3 - 30 + "px");

  let leftSide = containerWidth/(-9);
  $("#services").css("left", leftSide + "px");
  
  $("#rightServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide -= containerWidth/3;
    /*if (currentFrame < framesCount) {
      leftChord = leftChord - containerWidth;
      currentFrame++;
    } else {
      leftChord = 0;
      currentFrame = 1;
    }*/

    $("#services").css("left", leftSide + "px");
  });
  $("#leftServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide += containerWidth/3;
    /*if (currentFrame <= 1) {
      leftChord = containerWidth * -2;
      currentFrame = framesCount;
    } else {
      leftChord += containerWidth;
      currentFrame--;
    }*/

    $("#services").css("left", leftSide + "px");
  });
});
