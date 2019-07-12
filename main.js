$(function(){
    $("#scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#mobilesecond").offset().top
        }, 2000);
    });
});