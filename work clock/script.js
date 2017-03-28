 var lunchTaken = 0;
   var password;
   var pass1 = "WorkClock";
 // CURRENT TIME - REGULAR CLOCK
 (function myClock(){
   var dat = new Date();
   var hours = dat.getHours();
   var minutes = dat.getMinutes();
   var seconds = dat.getSeconds();
 
   
   
   function pass(){
   password=prompt('Please enter your password to view this page!');
   
   if(password == pass1){
	    alert("Password Correct! Click OK to enter.");
   }  else {
		   window.location="http://darpet.com/";
	   }
   }

 
   if (minutes < 10) {
	 document.getElementById("current-time").innerHTML = hours + ":0" + minutes + ":" + seconds;
	 } else if (seconds < 10 && seconds >= 0) {
	 document.getElementById("current-time").innerHTML = hours + ":" + minutes + ":0" + seconds;
	 } else if (hours < 10) {
	 document.getElementById("current-time").innerHTML = "0" + hours + ":" + minutes + ":" + seconds;
	 } else {
	 document.getElementById("current-time").innerHTML = hours + ":" + minutes + ":" + seconds;
	 }
	  var t = setTimeout(myClock, 1000);
	 })();
	 

	 
	 
	 
	  // TIME REMAINING 
	  
	  function remainingTime(){
		  
		   var endTime = (document.getElementById("expected-end-time-input")).value;
		   
		   endTime = endTime +":00";
	
		   endTime = endTime.split(":");
		   var endHour = endTime[0]*60*60;
		   var endMinute = endTime[1]*60;
		   var endSeconds = (endTime[0]*60*60)+ (endTime[1]*60);
		   
		   
		   //get date
		    var dat = new Date();
            var hours = dat.getHours()*60*60;
            var minutes = dat.getMinutes()*60;
            var seconds = dat.getSeconds();
			var time = hours+minutes+seconds;
		   // /get date
		   
		   var remaining = endSeconds - time;
		   
		    var h = Math.floor(remaining / 3600);
            var m = Math.floor(remaining % 3600 / 60);
            var s = Math.floor(remaining % 3600 % 60);
		   
		   if (m < 10) {
	 document.getElementById("time-remaining-box").innerHTML = h + ":0" + m + ":" + s;
	 } else if (s < 10) {
	 document.getElementById("time-remaining-box").innerHTML = "0"+h + ":" + m + ":0" + s;
	 } else if (h < 10) {
	 document.getElementById("time-remaining-box").innerHTML = "0" + h + ":" + m + ":" + s;
	 } else {
	 document.getElementById("time-remaining-box").innerHTML = h + ":" + m + ":" + s;
	 }
	 var t = setTimeout(remainingTime, 1000);
		   
	  }
	  
	  
	  //START TIME INPUT
	  function startTime(){
	  var startTime = document.getElementById("start-input").value;
	  var testTime = startTime.split(":");
	  var startHour = testTime[0]*60*60; //convert to seconds
	  var startMinute = testTime[1]*60; //convert to seconds
	  var startTotal = startHour+startMinute;
	  
	  
		  (function elapsedTime(){
   var dat = new Date();
   var hours = dat.getHours()*60*60;
   var minutes = dat.getMinutes()*60;
   var seconds = dat.getSeconds();
   var currentTotal = hours+minutes+seconds;
   var startcurrent = currentTotal-startTotal;
   var h = Math.floor(startcurrent / 3600);
    var m = Math.floor(startcurrent % 3600 / 60);
    var s = Math.floor(startcurrent % 3600 % 60);
   
   
 
   if (m < 10) {
	 document.getElementById("elapsed-time").innerHTML =+ h + ":0" + m + ":" + s;
	 } else if (s < 10) {
	 document.getElementById("elapsed-time").innerHTML = "0" + h + ":" + m + ":0" + s;
	 } else if (h < 10) {
	 document.getElementById("elapsed-time").innerHTML = "0" + h + ":" + m + ":" + s;
	 } else {
	 document.getElementById("elapsed-time").innerHTML = h + ":" + m + ":" + s;
	 }
	  var t = setTimeout(elapsedTime, 1000);
	 })();
		  
		  
		  
	  
	
	  
	
	  }
	  
	  //hour rate
	  
	  function hourRate(){
   var dat = new Date();
   var hours = dat.getHours()*60*60;
   var minutes = dat.getMinutes()*60;
   var seconds = dat.getSeconds();
   var currentTotal = hours+minutes+seconds;

   var startTime = document.getElementById("start-input").value;
	  var testTime = startTime.split(":");
	  var startHour = testTime[0]*60*60; //convert to seconds
	  var startMinute = testTime[1]*60; //convert to seconds
	  var startTotal = startHour+startMinute;
  
   var startcurrent = currentTotal-startTotal;
   var rate = document.getElementById("hour-rate-input").value;
   ratemin = rate/60;
   ratesec = ratemin/60;
   var earnings = ratesec*startcurrent;
   earnings = Math.round(earnings * 100) / 100;
   earningsFix = (earnings).toFixed(2)
   document.getElementById("hour-rate-input").style.color = 'white';
   console.log(lunchTaken);
		   
	  if (lunchTaken === 0){
		  document.getElementById("earnings").innerHTML =earningsFix +" Dollars";
	  } else {
		     document.getElementById("earnings").innerHTML =(earningsFix-rate/2) +" Dollars";
	  }
   var t = setTimeout(hourRate, 1000);
   
	  }
	  
	  //change text color on click
	  

var property = document.getElementById("lunch-button1");
var property2 = document.getElementById("lunch-button2");

function lunchCheck() {
	
       lunchTaken = 1;
	   property.style.backgroundColor = "red";
	   property2.style.backgroundColor = "lightgrey";
	
}

function lunchUnCheck() {
	lunchTaken = 0;
	property2.style.backgroundColor = "red";
	   property.style.backgroundColor = "lightgrey";
}
       
