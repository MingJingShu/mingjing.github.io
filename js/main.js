$(document).ready(function() {
	console.log('ready');
	//Dogtitle animation
$('.Dogtitle').stop().addClass('in');

//scrollspy
$(document).scroll(function(e) {
	
	if($(this).stop().scrollTop() > 20){
	
		$('.my-icon-down').addClass('down-now');
		console.log($(this).scrollTop());

	}
	else{
		$('.my-icon-down').removeClass('down-now');
		
		console.log('removeNow');
	}
	});

});
