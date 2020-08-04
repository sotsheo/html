$('.banner_main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows:false,
	infinite: true,
	speed: 1500,
	fade: true,
	cssEase: 'linear'
});
$('.slider_qc').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	//autoplay: true,
	// autoplaySpeed: 2000,
	dots: true,
	arrows:false,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: false,
			slidesToShow: 1
		}
	}
	]
});
$('.slider_album').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.banner_in_td').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slider_dt').owlCarousel({
    loop:false,
    margin:50,
    nav:true,
    items:6,
    dot:false,
    responsive:{
        0:{
            items:3,
            margin:20,
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
         1200:{
            items:6
        }
    }
})


