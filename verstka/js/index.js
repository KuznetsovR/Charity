$(document).ready(() => {
  const blockCntTop = $(".counter-heading").offset().top;
  const blockCntHeight = $(".counter-heading").height();

  let alreadyStarted = false;

  function moveCnt() {
    if (!alreadyStarted) {
      $(".dwl-counter").each((index, el) => {
        const element = $(el);
        const start = element.attr("data-start");
        const finish = element.attr("data-finish");

        console.log(element, start, finish);

        const interval = setInterval(() => {
          for (let i = start; i < finish; i++) {
            console.log(i);
            element.html(i);
          }

          clearInterval(interval);
        }, 10000);
      });

      //
      alreadyStarted = true;
    }
  }

  $(window).scroll(() => {
    const blockCntScrollTop = $(window).scrollTop();

    if (
      blockCntScrollTop >= blockCntTop &&
      blockCntScrollTop < blockCntTop + blockCntHeight
    ) {
      console.log("InTo");

      moveCnt();
    } else {
      console.log("Out");
    }
  });
  //////subheader
  let windowWidth = Math.ceil($(window).width());
  let containerWidth = windowWidth * 0.7;
  if (windowWidth >= 1024) {
    containerWidthServices = containerWidth;
    $(".subheader-text").width(containerWidth + "px");
    $(".service").width(containerWidthServices / 3 - 30 + "px");

    leftSide = containerWidthServices / -9;
    $("#services").css("left", leftSide + "px");
  } else {
    $("#subheaderCaroosel").css("padding", 0);
    $(".subheader-text").width(windowWidth + "px");
  }
  containerWidth = $(window).width() * 0.7 - 30;
  const framesCount = $(".subheader-text").length;

  $(".subheader-text").addClass("shown");
  $(".subheader-text_zero").addClass("hidden");
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

  ////features
  $(".feature").width(windowWidth - 40 + "px");

  ///////////////////

  $(window).resize(() => {
    windowWidth = Math.ceil($(window).width());
    containerWidth = windowWidth * 0.7;
    if (windowWidth >= 1024) {
      containerWidthServices = containerWidth;
      $(".subheader-text").width(containerWidth + "px");
      $(".service").width(containerWidthServices / 3 - 30 + "px");

      leftSide = containerWidthServices / -9;
      $("#services").css("left", leftSide + "px");
    } else {
      $("#subheaderCaroosel").css("padding", 0);
      $(".subheader-text").width(windowWidth + "px");
    }
  });

  //////////////////////// menu scroll

  $(".menu-bars").on("click", (e) => {
    e.preventDefault();
    window.scroll(0, 0);
    $(".menu-bars").toggleClass("menu-bars_open");
    $(".body-wrapper").toggleClass("mobile-nav_active");
  });

  $(".mob-nav-point").on("click", (e) => {
    e.preventDefault();
  });
  //////////////////menu list open
  const menuList = document.getElementById("mob-nav-list");
  let openPointsArr = [];
  menuList.onclick = function () {
    //console.log(event.target)
    let counter = 0;
    const mobNavPoints = document.querySelectorAll(".mob-nav-point");
    for (const point of mobNavPoints) {
      counter++;
      if (point.contains(event.target)) {
        if (openPointsArr.indexOf(counter) !== -1) {
          if (point.getElementsByTagName("ul")[0] !== undefined) {
            if (point.getElementsByTagName("ul")[0].contains(event.target))
              return;
          }
          const index = openPointsArr.indexOf(counter);
          openPointsArr.splice(index, 1);
          point.style.background = "#2d3e50";
        } else {
          point.style.background = "#273747"; //toggleClass не работает
          openPointsArr.push(counter);
        }
      }
    }
  };

  ////////////// services
  if (windowWidth >= 1024) {
    let containerWidthServices = $(window).width() * 0.7;
    $(".service").width(containerWidthServices / 3 - 30 + "px");

    let leftSide = containerWidthServices / -9;
    $("#services").css("left", leftSide + "px");
  } else {
    $(".service").width(windowWidth - 30 + "px");
  }

  $("#rightServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide -= containerWidthServices / 3;

    $("#services").css("left", leftSide + "px");
  });
  $("#leftServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide += containerWidthServices / 3;

    $("#services").css("left", leftSide + "px");
  });
});
