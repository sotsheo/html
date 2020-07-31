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