
$(window).scroll(function(){
		if($(this).scrollTop()> 180) 
		{
			$(".navbar").addClass("new");
		}
		else
		{
			$(".navbar").removeClass("new");
		}
});