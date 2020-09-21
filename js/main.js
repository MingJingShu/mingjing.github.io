$(document).ready(function() {
	console.log('ready');
	//Dogtitle animation
$('.Dogtitle').stop().addClass('in');
/*指標滾動******************/
$(document).scroll(function(e) {
	
	if($(this).stop().scrollTop() > 20){
	
		$('.my-icon-down').addClass('down-now');
		//console.log($(this).scrollTop());

	}
	else{
		$('.my-icon-down').removeClass('down-now');
		
		//console.log('removeNow');
	}
	});
/*********************/
/*list where are u going* */
// $(this).click(function(){
// 	$('html,body').animate({scrollTop:$(this).offest().top},500);
// })
/*********************/
});
