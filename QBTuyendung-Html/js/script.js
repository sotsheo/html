var width_c=$(".container ").width()-242;
$(".list_v2").css("width",width_c);
$('.slider_video').owlCarousel({
	loop:false,
	margin:30,
	nav:true,
	dots:false,
	navText: ["<img src='images/pv1.png'>","<img src='images/nv1.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$('.slider_products').owlCarousel({
	loop:false,
	margin:30,
	nav:true,
	dots:false,
	navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
});
$('[data-fancybox="gallery"]').fancybox({});
function startTimer(seconds,minutes,hours, day,key) {
	if((seconds-1)==0 && seconds !=0){
		if(minutes-1==0 && minutes !=0){
			//console.log(hours);
			if(hours==0){
				if(day-1>=0){
					hours=24;
					day--;
				}
			}
			if( hours!=0){
				hours--;
				minutes=60;
			}
		}else if(minutes-1>0){
			minutes--;
			if(minutes<10){
				minutes='0'+minutes;
			}
			seconds=59;
			//console.log(21);
			// /console.log((seconds-1)==0);
		}
	}
	else if((seconds-1)>0){
		seconds--;
		if(seconds<10){
			seconds='0'+seconds;
		}
	}
	// console.log(seconds+'s-'+minutes+'p-'+hours+'h-'+day);
	key.attr("seconds",seconds);
	key.attr("minutes",minutes);
	key.attr("hours",hours);
	key.attr("day",day);
	key.find('.seconds').html(seconds);
    key.find('.minutes').html(minutes);
    key.find('.hours').html(hours);
    key.find('.day').html(day);
}
setInterval(function () {
	$(".time_clock").each(function(){
		var seconds=$(this).attr("seconds");
		var minutes=$(this).attr("minutes");
		var hours=$(this).attr("hours");
		var day=$(this).attr("day");
		startTimer(seconds,minutes,hours,day,$(this));
	})
	
}, 1000);
	new WOW().init();