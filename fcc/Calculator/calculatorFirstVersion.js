$(document).ready(function(){
	var tempNumber; //variable for storing temporary number
	var allNumbers = "";
	var numbersArr = [];
	var i = 0;
	var tempResult;
	var result;
	var resultOld = 0;
	
	
	
	(function keyboardNumbers(){
			$("#1").click(function(){
				tempNumber = "1";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
			    console.log(allNumbers);
			});
			$("#2").click(function(){
				tempNumber = "2";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#3").click(function(){
				tempNumber = "3";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#4").click(function(){
				tempNumber = "4";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#5").click(function(){
				tempNumber = "5";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#6").click(function(){
				tempNumber = "6";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#7").click(function(){
				tempNumber = "7";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#8").click(function(){
				tempNumber = "8";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#9").click(function(){
				tempNumber = "9";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			$("#button-zero").click(function(){
				if(allNumbers.indexOf("0")!== 0){
				tempNumber = "0";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
				} 
			
			});
			$("#button-dot").click(function(){
				tempNumber = ".";
				allNumbers = allNumbers+tempNumber;
				$("#main-text").html(allNumbers);
				console.log(allNumbers);
			
			});
			

	})();
	
	(function operators(){
		$("#percent").click(function(){
				
				numbersArr[i] = allNumbers+'\/';
				allNumbers = "";
				tempResult = numbersArr;
				$("#sub-text").html(tempResult);
				i++;
		});
		$("#multiply").click(function(){
				
				numbersArr[i] = allNumbers+'\*';
				allNumbers = "";
				tempResult = numbersArr;
				$("#sub-text").html(tempResult);
				i++;
		});
		$("#minus").click(function(){
				
				numbersArr[i] = allNumbers+'\-';
				allNumbers = "";
				tempResult = numbersArr;
				$("#sub-text").html(tempResult);
				i++;
		});
		$("#add").click(function(){
				
				numbersArr[i] = allNumbers+'\+';
				allNumbers = "";
				tempResult = numbersArr;
				$("#sub-text").html(tempResult);
				i++;
		});
		$("#equal-button").click(function(){
				
				numbersArr[i] = allNumbers+'';
				numbersArr = numbersArr.toString(); 
				console.log("type "+typeof(numbersArr));
				numbersArr = numbersArr.replace(/,/g, "");
				result = eval(numbersArr) + resultOld;
				resultOld = result;
				console.log("numbersArr: "+numbersArr);
				console.log("result: "+result);
				$("#main-text").html(result);
				allNumbers = result;
				tempResult = numbersArr;
				$("#sub-text").html(tempResult);
				i++;
		});
		$("#ac").click(function(){
				
				tempNumber; //variable for storing temporary number
				allNumbers = "";
				numbersArr = [];
				i = 0;
				tempResult = "";
				result = "";
				resultOld = 0;
				$("#main-text").html("0");
				$("#sub-text").html("0");
		});
		$("#ce").click(function(){
				console.log("numbersArr: "+numbersArr);
				numbersArr.splice(numbersArr.length, 1);
				console.log("numbersArr splice: "+numbersArr);
				console.log("len: "+numbersArr.length);
				tempNumber = numbersArr[numbersArr.length-1];
				$("#main-text").html(tempNumber);
				i--;
			
		});
	})();
	
		
	/*var thisIsTest = $('.buttons').text();
	$('.buttons').click(function(){
				 thisIsTest = $('.buttons').text();
				 console.log(thisIsTest);
			
			});
	console.log(thisIsTest);
	*/
	
	
	
	
});