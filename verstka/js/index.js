// import css from '../css/main.css'
$(document).ready(() => {
  const blockCntTop = $(".counter-heading").offset().top;
  const blockCntHeight = $(".counter-heading").height();
  let alreadyStarted = false;



  function moveCnt() {
    if (!alreadyStarted) {
      $(".dwl-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).attr("data-finish"),
            },
            {
              duration: 3000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });

      alreadyStarted = true;
    }
  }

  function switchSubheader(framesCount, containerWidth) {
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
  }

  function setServiceWidth(windowWidth) {
    if (windowWidth+16 >= 1024) {
      let containerWidthServices = $(window).width() * 0.7;
      $(".service").width(containerWidthServices / 3 - 30 + "px");

      let leftSide = containerWidthServices / -9;
      $("#services").css("left", leftSide + "px");
    } else {
      $(".service").width(windowWidth - 30 + "px");
      $("#services").css("left", 0 + "px");
    }
  }


  $(window).scroll(() => {
    const blockCntScrollTop = $(window).scrollTop() + $(window).height();

    if (
      blockCntScrollTop >= blockCntTop 
      // && blockCntScrollTop - $(window).height() < blockCntTop + blockCntHeight
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
  containerWidth = windowWidth * 0.7;
  const framesCount = $(".subheader-text").length - 1;

  $(".subheader-text").addClass("shown");
  $(".subheader-text_zero").addClass("hidden");
  console.log(framesCount);

  switchSubheader(framesCount, containerWidth);

  ////features
  $(".feature").width(windowWidth - 40 + "px");

  /////////////////// resize

  $(window).resize(() => {
    windowWidth = Math.ceil($(window).width());
    containerWidth = windowWidth * 0.7;
    if (windowWidth >= 1024) {
      containerWidthServices = containerWidth;
      $(".subheader-text").width(containerWidth + "px");
      $(".service").width(containerWidthServices / 3 - 30 + "px");
      $("#subheaderCaroosel").css("padding-left", 15 + "%");

      leftSide = containerWidthServices / -9;
      $("#services").css("left", leftSide + "px");
    } else {
      $(".feature").width(windowWidth - 40 + "px");
      $("#subheaderCaroosel").css("padding", 0);
      $(".subheader-text").width(windowWidth + "px");
    }
    switchSubheader(framesCount, containerWidth);
    setServiceWidth(windowWidth);
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
    let counter = 0;
    const mobNavPoints = document.querySelectorAll(".mob-nav-point");
    for (const point of mobNavPoints) {
      counter++;
      if (point.contains(event.target)) {
        
        if (openPointsArr.indexOf(counter) !== -1) {
          if (point.getElementsByTagName("ul")[0] !== undefined && point.getElementsByTagName("ul")[0].contains(event.target)) {
              return;
          }
          const index = openPointsArr.indexOf(counter);
          openPointsArr.splice(index, 1);
          point.style.background = "#2d3e50";
          console.log(point.getElementsByTagName("ul")[0])
          point.getElementsByTagName("ul")[0].classList.add('closed')
        } else {
          point.style.background = "#273747"; 
          point.getElementsByTagName("ul")[0].classList.remove('closed');
          openPointsArr.push(counter);
        }
      }
    }
  };

  ////////////// services
  setServiceWidth(windowWidth);

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
