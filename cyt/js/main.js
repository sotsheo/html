$(".search-icon").click(function() {
    $(".box-search-show").addClass("open");
});
$(".close").click(function() {
    $(".box-search-show").removeClass("open");
});

$(".categories-menu").each(function(){
    $(this).find(".fa-minus").click(function(){
        $(this).toggleClass("fa-plus");
        $(this).parent().parent().find(".group-check-box").toggleClass("active");
    });
});
// creat menu sidebar
$(".menu-bar-lv-1").each(function(){
    $(this).find(".span-lv-1").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
    });
});
$(".menu-bar-lv-2").each(function(){
    $(this).find(".span-lv-2").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function() {
    $('.menu-bar-mobile').fadeOut();
    $(".shadow-open-menu").fadeOut();
    $(".iconmenu").toggleClass("active");
});
$(".iconmenu").click(function() {
    $(this).toggleClass("active");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});

$(document).ready(function(){
    var body = $("html, body");
    // body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
    //    alert("Finished animating");
    // });
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
            $('.scrollup').addClass("active");
        } else {
            $("body").removeClass("fixed");
            $('.scrollup').removeClass("active");
        };
    };
    window.addEventListener("scroll", myScrollFunc);

    setTimeout(function(){ 
        $('.loading').addClass('close-loading');
        $('.main-content').addClass('active');
    }, 2500);
    
    $('.tab-cate-product ul li a').click(function() {
        var getTabId = $(this).attr('id');
        $('.tab-cate-product ul li a,.tab-cate-product ul li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.content-read').slideUp();
        $('.content-read-' + getTabId).slideDown();

    });
     // setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
});

function font_size_width_destop() {
    var width = window.innerWidth
    var font_size_html = width/1920*10;
    $('html').css({
        'font-size': font_size_html,
    });
}

$(window).resize(function(){
    if ($(window).width() >= 1400 ) {
        font_size_width_destop();
    }

});

if ($(window).width() >= 1400 ) {
    font_size_width_destop();
}
var days = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  // hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
$(".day_week").html(days[dateObj.getDay()]);

$(".day").html(day);
$(".month").html(month);
$(".year").html(year);
$(".time").html(formatAMPM(dateObj));

$(".list_news").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:'<button class="button_click button_click_right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  prevArrow:'<button class="button_click "><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
});
$(".slider_banner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".title_r_v4 a").each(function(index){
    $(this).click(function(){
        $(".page_v").removeClass("active");
        $(".page_v").each(function(i){
            if(index==i){
                $(this).addClass("active");
                return false;
            }
        });
        return false;
    });
});
$(document).ready(function(){
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
$(".list_category i").each(function(index){
    $(this).click(function(){
        $(this).closest("li").toggleClass("active");
        return false;
    });
});