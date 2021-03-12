$(document).ready(() => {
  let containerWidth = ($(window).width() * 0.7) - 30;
  const framesCount = $(".subheader-text").length;

  $(".subheader-text").width(containerWidth + "px");
  $(".subheader-text").addClass("shown");
  $(".subheader-text_zero").addClass("hidden");



  const blockCntTop = $(".counter-heading").offset().top;
  const blockCntHeight = $(".counter-heading").height();



  
  let alreadyStarted = false;

  function moveCnt() {
    if (!alreadyStarted) {


      $(".dwl-counter").each((index, el) => {
        const element = $(el);
        const start = element.attr('data-start');
        const finish = element.attr('data-finish');
  
        console.log(element, start, finish);


        const interval = setInterval(() => {
          
          for (let i = start; i<finish; i++) {
            console.log(i);
            element.html(i);
          }

          clearInterval(interval);
        }, 10000)
      });




      //
      alreadyStarted = true;
    }
  }





  $(window).scroll(() => {

    const blockCntScrollTop = $(window).scrollTop();

    if ((blockCntScrollTop >= blockCntTop) && (blockCntScrollTop < blockCntTop + blockCntHeight)) {
      console.log("InTo");

      moveCnt();



    } else {
      console.log("Out");
    }

    
    

  });





























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

  
  $(window).resize(() => {
    containerWidth = Math.ceil($(window).width() * 0.7);
    containerWidthServices = Math.ceil($(window).width() * 0.7)
    $(".subheader-text").width(containerWidth + "px");
    $(".service").width(containerWidthServices/3 - 30 + "px");
    
    leftSide = containerWidthServices/(-9);
    $("#services").css("left", leftSide + "px");




    if (containerWidth<1024){
      $(".feature").width(Math.ceil($(window).width()))
    }
  });

  if (containerWidth<1024){
    $(".feature").width(Math.ceil($(window).width()))
  }
  //////////////////////// menu scroll 777

  $(".menu-bars").on("click", (e) => {
    e.preventDefault();
    $(".body-wrapper").toggleClass("mobile-nav_active")
  })

  $(".mob-nav-point").on("click", (e) =>{
    e.preventDefault();

  })

  ////////////// services
  let containerWidthServices = ($(window).width() * 0.7)
  
  $(".service").width(containerWidthServices/3 - 30 + "px");

  let leftSide = containerWidthServices/(-9);
  $("#services").css("left", leftSide + "px");
  
  $("#rightServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide -= containerWidthServices/3;
    /*if (currentFrame < framesCount) {
      leftChord = leftChord - containerWidthServices;
      currentFrame++;
    } else {
      leftChord = 0;
      currentFrame = 1;
    }*/

    $("#services").css("left", leftSide + "px");
  });
  $("#leftServiceBtn").on("click", (e) => {
    e.preventDefault();
    leftSide += containerWidthServices/3;
    /*if (currentFrame <= 1) {
      leftChord = containerWidthServices * -2;
      currentFrame = framesCount;
    } else {
      leftChord += containerWidthServices;
      currentFrame--;
    }*/

    $("#services").css("left", leftSide + "px");
  });
});                                       //1 сервис на экран для мобилки
