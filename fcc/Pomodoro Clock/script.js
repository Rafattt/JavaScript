$(document).ready(function(){

var breakLength = 5; //number of minutes set as break
var breakLeft = 5;	//time left to the end of break in minutes (default same as breakLength)
var sessionLength = 1; //number of minutes set as session
var timeLeft = sessionLength-1; //time left to the end of session  in minutes (default same as sessionLength)
var seconds = 15;	//number of seconds left to decrase minutes left by 1
var a = 0;


// --------- settings for length of break and session below this line ---------

// decrasing and incrasing break length

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
	
// decrasing and incrasing session length


$("#session-length").html(sessionLength);
	$("#minus-session").click(function(){
		sessionLength--;
		timeLeft = sessionLength-1;
		$("#session-clock").html(timeLeft+1);
		$("#session-length").html(sessionLength);
	});
	$("#plus-session").click(function(){
		sessionLength++;
		timeLeft = sessionLength;
		timeLeft = sessionLength-1;
		$("#session-clock").html(timeLeft+1);
		$("#session-length").html(sessionLength);
	});
	
// --------- settings for length of break and session above this line ---------


var tt = (function checkTitleName(){
	if(titleName = "Session"){
		return false;
	} else if (titleName = "Break"){
		return true;
	}
})();

$("#pomodoro-box").click(function clock(){
	if(a == 0){
		a = 1;
	} else {
		a = 0;
	} 

		function timer(){
			var titleName = $("#session-text").html();
			if( a == 1){
				console.log("test2");
	console.log("a2:"+titleName);
		$("#session-clock").html((timeLeft)+":"+seconds);
		if(seconds<10 && seconds>0){
			$("#session-clock").html(timeLeft+":0"+seconds);
			seconds--;
		} else if(seconds === 0 && timeLeft>0){
			$("#session-clock").html(timeLeft+":"+"00");
			seconds--;
		} else if(seconds<0 && timeLeft>0){
			seconds = 15;
			timeLeft--;
			$("#session-clock").html(timeLeft+":"+seconds);
			seconds--;
		} else if(seconds==0 && timeLeft==0){
			if(titleName == "Session"){
			breakLeft = breakLength;
			$("#session-text").html("Break");
			timeLeft = breakLength-1;
			seconds = 15;
			$("#pomodoro-box").css('background-color','red');
			} else if(titleName == "Break") {
				$("#pomodoro-box").css('background-color','green');
				$("#session-text").html("Session");
				timeLeft = sessionLength-1;
				seconds = 15;
			}
			timer();
		} else{
			seconds--;
		}
			} else {
				clearInterval(refreshIntervalId);
				console.log("clear");
			}
			
	};
	var refreshIntervalId = setInterval(function(){
			timer();
		}, 1000);
		
		
		
	
	
	
			
	});
	
	
});
	

