
$(document).ready(() => {
            

  

    const containerWidth = Math.ceil($(window).width() - $(window).width() * 0.3);
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

    //DZ: left btn event


    $(window).resize(() => {
        
        const containerWidth = Math.ceil($(window).width() - $(window).width() * 0.3);
    
        $(".subheader-text").width(containerWidth + "px");


    });




});