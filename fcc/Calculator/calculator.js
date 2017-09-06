$(document).ready(function(){
	
	var lastActiveKey; //variable for storing last clicked button value
	var typedNumbers = "0"; //adding typed keys to this variable as a string
	$("#main-text").html(typedNumbers);
	var subtext;  //storing numbers for displaing bootom line on the screen
	var result;
	
	function pushTheButton(){ //this function checking name of div id, setting it as lastActiveKey and adding it to typedNumbers string
		lastActiveKey = event.target.id;
		typedNumbers = typedNumbers + lastActiveKey;
	}
	
	function checkIfFirstZero(){    //this function checking if zero is a first character and if it is removing it from string
		if(typedNumbers.indexOf("0") === 0){
			typedNumbers = typedNumbers.substr(1);
			$("#main-text").html(lastActiveKey);
			$("#sub-text").html(typedNumbers);
		} else {
			$("#main-text").html(lastActiveKey);
			$("#sub-text").html(typedNumbers);
		}
	}
	
	function pushTheZero(){ // function that contains pushTheButton() and checkIfFirstZero()
		pushTheButton();
		checkIfFirstZero();
	}
	
	(function getKey(){
		$("#1").click(function(){
			pushTheZero();
		});
		$("#2").click(function(){
			pushTheZero();
		});
		$("#3").click(function(){
			pushTheZero();
		});
		$("#4").click(function(){
			pushTheZero();
		});
		$("#5").click(function(){
			pushTheZero();
		});
		$("#6").click(function(){
			pushTheZero();
		});
		$("#7").click(function(){
			pushTheZero();
		});
		$("#8").click(function(){
			pushTheZero();
		});
		$("#9").click(function(){
			pushTheZero();
		});
		$("#button-zero").click(function(){
			if(typedNumbers.indexOf("0")!== 0 && $('#button-zero').val() !== 0){
			lastActiveKey = "0";
			typedNumbers = typedNumbers + lastActiveKey;
			$("#main-text").html(typedNumbers);
			}
		});
		//can't automaticly read value of these values so using checkIfFirstZero() only
		$("#button-dot").click(function(){
			lastActiveKey = ".";
			typedNumbers = typedNumbers + lastActiveKey;
			checkIfFirstZero();
		});
		$("#plus").click(function(){
			lastActiveKey = "+";
			typedNumbers = typedNumbers + lastActiveKey;
			checkIfFirstZero();
		});
		$("#minus").click(function(){
			lastActiveKey = "-";
			typedNumbers = typedNumbers + lastActiveKey;
			checkIfFirstZero();
		});
		$("#divide").click(function(){
			lastActiveKey = "/";
			typedNumbers = "(" + typedNumbers + ")" + lastActiveKey;
			checkIfFirstZero();
		});
		$("#multiply").click(function(){
			lastActiveKey = "*";
			typedNumbers = "(" + typedNumbers + ")" + lastActiveKey;
			checkIfFirstZero();
		});
		$("#equal-button").click(function(){
			typedNumbers = typedNumbers.toString(); 
			typedNumbers = typedNumbers.replace(/,/g, "");
			result = eval(typedNumbers);
			typedNumbers = result;
			$("#main-text").html(result);
		});
		$("#ac").click(function(){
			lastActiveKey = ''; 
			typedNumbers = '0'; 
			subtext ='0';  //storing numbers for displaing bootom line on the screen
			$("#main-text").html(typedNumbers);
			$("#sub-text").html(subtext);
		});
		$("#ce").click(function(){
			if(typedNumbers.length > 1){
				lastActiveKey = typedNumbers.charAt(typedNumbers.length-2); 
				typedNumbers = typedNumbers.slice(0, -1);
				$("#main-text").html(lastActiveKey);
				$("#sub-text").html(typedNumbers);
			}
		});
	})();
	
});