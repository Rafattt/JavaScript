$(document).ready(function(){
	var currentTime = new Date();
	var breakLength = 5;
	var breakLeft = 5;
	var sessionLength = 25;
	var timeLeft = 25;
	var seconds = 15;
	var controlNumber = 0;
	
	
	$("#break-length").html(breakLength);
	$("#minus-break").click(function(){
		breakLength--;
		breakLeft = breakLength;
		$("#break-length").html(breakLength);
	});
	$("#plus-break").click(function(){
		breakLength++;
		breakLeft = breakLength;
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

	
	
	

	
	
	$("#pomodoro-box").click(function sestest(){
		timeLeft--;
		seconds--;
		console.log(timeLeft);
		function timer(){
		$("#session-clock").html(timeLeft+":"+seconds);
		if(seconds<10 && seconds>0){
			$("#session-clock").html(timeLeft+":0"+seconds);
			console.log("one");
			seconds--;
		} else if(seconds === 0 && timeLeft>0){
			$("#session-clock").html(timeLeft+":"+"00");
			console.log("two");
			seconds--;
		} else if(seconds<0 && timeLeft>0){
			seconds = 15;
			timeLeft--;
			$("#session-clock").html(timeLeft+":"+seconds);
			console.log("three");
			seconds--;
		} else if(seconds==0 && timeLeft==0){
			console.log("here");
			breakLeft = breakLength;
			clearInterval(refreshIntervalId);
			breakTime()
			controlNumber = 1;
		} else{
			seconds--;
		}
	};

		var refreshIntervalId = setInterval(function(){
			timer();
		}, 1000);
	
	});
	
	
	
		function breakTime(){
		seconds = 15;
		function timer2(){
			$("#session-text").html("Break");
				console.log("good");
				$("#session-clock").html(breakLeft+":"+seconds);
				
		
			seconds--;
		};
				
		
				setInterval(function(){
			timer2();
		}, 1000);

	};
	
	
	
	
});
