// Your JS gone here
$(document).ready(function (){
	getCurrentDateTime();
});

function getCurrentDateTime(){
	var now = new Date(Date.now());
	if(now.getHours() > 6 && now.getHours() <= 11)
	{
		$("#sun").removeClass("sun-evening");
		$("#sun").addClass("sun-morning");
		
	}
	else if( now.getHours() > 11 && now.getHours()  < 18)
	{
		$("#sky").css("background-color","#33cccc");
		$("#sun").removeClass("sun-morning");
		$("#sun").addClass("sun-afternoon");
		
	}
	else
	{
		$("#sky").css("background-color","#ff9999");
		$("#sun").removeClass("sun-afternoon");
		$("#sun").addClass("sun-evening");
		
	}
}