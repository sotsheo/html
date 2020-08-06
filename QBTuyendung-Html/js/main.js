$('.count_home').counterUp({
      delay: 100,
      time: 8000
    });
$(".left_filter .title_filter ").each(function(){
    $(this).click(function(){
        $(this).siblings('.content_select').slideToggle();
        $(this).toggleClass('active');
    });
});
$(".icon_filter i ").click(function(){
    $(".left_filter").toggleClass("active");
    $(".bg_filter").toggleClass("active");
    $("body").toggleClass("not-scroll");
});
$(".bg_filter ").click(function(){
    $(".left_filter").toggleClass("active");
    $(".bg_filter").toggleClass("active");
     $("body").toggleClass("not-scroll");
});
$("a.checkbox").each(function(){
    $(this).click(function(){
        window.location.href=$(this).attr("href");
    });
});
$(document).ready(function(){

    if ($(window).width() < 992 ) {
        $('.main-menu ul li').find('.span-lv-1').click(function(){
            if ($('.main-menu > ul > li').hasClass('active')) {
                $('.main-menu ul li').removeClass('active');
            } else{
                $('.main-menu ul li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
        $('.main-menu ul li').find('.span-lv-2').click(function(){
            if ($('.main-menu > ul > li > ul > li').hasClass('active')) {
                $('.main-menu > ul > li > ul > li').removeClass('active');
            } else{
                $('.main-menu > ul > li > ul > li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
    }
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y > 10) {
            $("body").addClass("fixed");
        } else {
            $("body").removeClass("fixed");
        };
    };
    var body = $("html, body");
    $(".button_sc a").click(function(){
        body.stop().animate({scrollTop:0}, 1000, 'swing', function() { });
        return false;
    });
    myScrollFunc();
    window.addEventListener("scroll", myScrollFunc);
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
});
