$(".buttons ").click(function(){
	$("#opVid").remove();
	$(".newest_news").addClass("not_mg");
	$("body").removeClass("ov-h");
});
$(".sa-carousel ").on('changed.owl.carousel', function(event) {

	$(".sa-carousel .item").each(function(index){
		if(event.item.index==index){
			if($(this).find('.video').html()){
				$(".newest_news ").addClass("not_mg");
			}else{
				$(".newest_news ").removeClass("not_mg");
			}
		}
	});

});
var myScrollFunc = function () {
	var y = window.scrollY;
	if (y > 20) {
		$(".newest_news").removeClass("not_mg");
		$("body").addClass("fixed");
	} else {
		$(".sa-carousel .active").each(function(index){
			if($(this).find('.video').html()){
				$(".newest_news").addClass("not_mg");
			}
		});
		$("body").removeClass("fixed");
	};
};
myScrollFunc();
window.addEventListener("scroll", myScrollFunc);
jQuery('.slider_item').owlCarousel({
	loop: false,
	margin: 0,
	nav: true,
	dots: false,
	items: 1,
	navText: ['<img src="./assets/img/next.png">', '<img src="./assets/img/next.png">'],
});
$(document).ready(function(e){
		wow = new WOW(
	      {
	        animateClass: 'animated',
	        offset:       100,          // default
            mobile:       false,
	        callback:     function(box) {
	          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	        }
	      }
	    );
	    wow.init();
	});
// map
$(".detail_mb path").each(function(){
	$(this).mouseenter(function(event) {
		var class_c=$(this).attr("class");
		$(".detail_mb path").each(function(){
			var class_v=$(this).attr("class_c");
			$(this).attr('class',class_v);
		});
		$(".detail_mb ."+class_c).attr('class',class_c+" active");
		$(".tooltip_img").addClass($(this).attr("class_img"));
		$(".tooltip_img").attr('class',' tooltip_img '+$(this).attr("class_img"));
		$(".tooltip_img").attr('src',$(this).attr("img"));
		$(".tooltip_img").addClass('active');
	});
});
$(".detail_mb").mouseleave(function() {
	$(".tooltip_img").removeClass('active');
	$(".detail_mb path").each(function(){
		var class_v=$(this).attr("class_c");
		$(this).attr('class',class_v);
	});
});