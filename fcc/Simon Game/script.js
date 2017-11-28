$(document).ready(function (){
	'use strict';
	var randomNumber = "";
	var randomArray = [];
	var clickedBox = "";
	var clickedBoxes = [];
	var score = 1;
	var testt = 0;
	var onOff = 0;
	var strictOnOff = 0;
	var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
	var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
	var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
	var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
	
	
	start();
	
	function random(){
		
		
			randomNumber = Math.floor((Math.random() * 4) + 1);
			randomArray.push(randomNumber);
			
	}
	function start(){
		$('#start').click(function(){
		if(onOff === 1){
		
		testt = 0;
		game();
				
				
	
	} else {
		console.log("no");
	}
	});
	}
	
	
	
	function game(){

				 random();
			
				 
				 for(let i = 0;i<randomArray.length;i++){
					let t = i*1000;
			 	setTimeout(function() {
						
					  
					 	 switch(randomArray[i]){
				case 1:
					$('#green-field').css('background-color', 'white'); 
					audio1.play();
					restoreColor();
					break;	
				case 2:
					$('#red-field').css('background-color', 'white');
					audio2.play();
					restoreColor();
					
					break;
				case 3:
					$('#yellow-field').css('background-color', 'white');
					audio3.play();
					restoreColor();
					
					break;
				case 4:
					$('#blue-field').css('background-color', 'white');
					audio4.play();
					restoreColor();
					
					break;
			}
			
				}, t);
				}
	}
	
	
	clickedBoxes = [];
	$('.field').click(function(event){	
		clickedBox = event.target.id;
		console.log(clickedBox);
		if(clickedBox === 'green-field'){
			clickedBox = 1;
			audio1.play();
		} else if(clickedBox === 'red-field'){
			clickedBox = 2;
			audio2.play();
		} else if(clickedBox === 'yellow-field'){
			clickedBox = 3;
			audio3.play();
		} else if(clickedBox === 'blue-field'){
			clickedBox = 4;
			audio4.play();
		}
		checkIfTheSame();
				
});

function checkIfTheSame(){
	
	if(clickedBox === randomArray[testt]){
		console.log('good');
		console.log('randomArray: '+randomArray);
		testt++;
		if(testt===randomArray.length){
			score++;
			console.log("test");
			$('#count-numbers').html(score);
		}
	} else {
		console.log('randomArray: '+randomArray);
		let randomArrayRepeat = randomArray;
		 for(let i = 0;i<randomArrayRepeat.length;i++){
					let t = i*1000;
			 	setTimeout(function() {
						
					  
					 	 switch(randomArrayRepeat[i]){
				case 1:
					$('#green-field').css('background-color', 'white'); 
					restoreColor();
					break;	
				case 2:
					$('#red-field').css('background-color', 'white');
					restoreColor();
					
					break;
				case 3:
					$('#yellow-field').css('background-color', 'white');
					restoreColor();
					
					break;
				case 4:
					$('#blue-field').css('background-color', 'white');
					restoreColor();
					
					break;
			}
			
				}, t);
				}
	}
}



function restoreColor(){
	setTimeout(function() {
	$('#green-field').css('background-color', 'green');
	$('#red-field').css('background-color', 'red');
	$('#yellow-field').css('background-color', 'yellow');
	$('#blue-field').css('background-color', 'blue');
	}, 500);
}

(function switcha(){
	$('#dd').click(function(event){
	if(onOff===0){
		onOff = 1;
		console.log("onOff: "+onOff);
		$('#count-numbers').html(score);
	} else if(onOff===1) {
		onOff = 0;
		console.log("onOff: "+onOff);
		$('#count-numbers').html("- -");

	}
});	
})();


$('#strict').click(function(event){
	if(strictOnOff===0){
		strictOnOff = 1;
		$('#strict-mode-led').css("background-color", "red")
		
	} else if(strictOnOff===1) {
		strictOnOff = 0;
		$('#strict-mode-led').css("background-color", "black")

	}
	
	
	
	
});

	
});
	
