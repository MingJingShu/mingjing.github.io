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
/*list where are u going*/

/*********************/
});
