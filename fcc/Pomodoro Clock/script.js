$(document).ready(function(){
	var currentTime = new Date();
	var breakLength = 5;
	var sessionLength = 25;
	var timeLeft = 25;
	var seconds = 15;
	
	
	$("#break-length").html(breakLength);
	$("#minus-break").click(function(){
		breakLength--;
		$("#break-length").html(breakLength);
	});
	$("#plus-break").click(function(){
		breakLength++;
		$("#break-length").html(breakLength);
	});
	
	
	$("#session-length").html(sessionLength);
	$("#minus-session").click(function(){
		sessionLength--;
		timeLeft = sessionLength;
		$("#session-clock").html(timeLeft);
		$("#session-length").html(sessionLength);
	});
	$("#plus-session").click(function(){
		sessionLength++;
		timeLeft = sessionLength;
		$("#session-clock").html(timeLeft);
		$("#session-length").html(sessionLength);
	});
	
	
	
	
	$("#pomodoro-box").click(function(){
		timeLeft--;
		function timer(){
		$("#session-clock").html(timeLeft+":"+seconds);
		console.log(seconds);
		if(seconds<10 && seconds>0 && timeLeft!= 0){
			seconds = "0"+seconds;
			$("#session-clock").html(timeLeft+":"+seconds);
		} else if(seconds === 0){
			$("#session-clock").html(timeLeft+":"+"00");
		} else if(seconds<0){
			seconds = 15;
			timeLeft--;
			$("#session-clock").html(timeLeft+":"+seconds);
		} else if(seconds==0 && timeLeft==0){
			return;
		} else{
			seconds--;
		}
		
	};

		setInterval(function(){
			timer();
		}, 1000);
	
	});
	
	
	
});