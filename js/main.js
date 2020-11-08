$(document).ready(function() {
	console.log('ready');
	//Dogtitle animation
$('.Dogtitle').stop().addClass('in');
/*指標滾動******************/
$(document).scroll(function(e) {
	
	if($(this).stop().scrollTop() > 20){
		$('.arrow').removeClass('arrow-ani');
	}
	else{
		$('.arrow').addClass('arrow-ani');
	}
	});

/*********************/

/*abilities-hidden*/

/*list where are u going*/
$('.my-list h5 > a').click(function(e){
	e.preventDefault();
	let id = $(this).attr("href");
	let y = $(id).offset().top;
	console.log(' y = '+y);
	$('body,html').stop().animate({scrollTop:y}, 400,'linear');
})
/*********************/
});
