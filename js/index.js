$(document).ready(function(){
	
	$('ul.gallery a').hover(function(){
		
		var element = $(this);
		var color = element.data('color');
		
		$('body').css('background-color', color);
		
		$(this).addClass('active');
		
	}, function(){
		$('body').css('background-color', '#FFFFFF');
		$(this).removeClass('active');
	});
	
});