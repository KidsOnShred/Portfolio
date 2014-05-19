$(function() {
	var angle = 0;
	var loop = null;
	function rotateLogo(loop) {
		var loop = setInterval(function(){
				angle+=1;		
				$("#snowflake").rotate(angle);
				
		},50);
	}
	$('#logo').hover(rotateLogo(loop), function(loop) {
		clearInterval(loop);
	});
});