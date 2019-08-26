$(document).ready(function() {
	console.log('ready');
	//Dogtitle animation
$('.Dogtitle').stop().addClass('in');

//scrollspy
$(document).scroll(function(e) {
	/* Act on the event */
	//console.log($(this).scrollTop());
	if($(this).stop().scrollTop() > 20){
		//$('.my-icon-down').stop().animate({opacity: 0});
		//$('.my-icon-down').stop().animate({display:none});
		$('.my-icon-down').addClass('down-now');
		console.log($(this).scrollTop());

	}
	else{
		$('.my-icon-down').removeClass('down-now');
		//console.log($(this).scrollTop());
		console.log('removeNow');
	}
	});

});