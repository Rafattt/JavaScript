$(document).ready(function (){
	'use strict';
	var randomNumber = "";
	var randomArray = [];
	var clickedBox = "";
	var clickedBoxes = [];
	var score = 0;
	var testt = 0;
	
	function random(){
		
		
			randomNumber = Math.floor((Math.random() * 4) + 1);
			randomArray.push(randomNumber);
			
	}
	
	$('#start').click(function(){
		testt = 0;
		game();
				
				
	});
	
	function game(){

				 random();
			
				 
				 for(let i = 0;i<randomArray.length;i++){
					let t = i*1000;
			 	setTimeout(function() {
						
					  
					 	 switch(randomArray[i]){
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
	
	
	clickedBoxes = [];
	$('.gameb').click(function(event){	
		clickedBox = event.target.id;
		console.log(clickedBox);
		if(clickedBox === 'green-field'){
			clickedBox = 1;
		} else if(clickedBox === 'red-field'){
			clickedBox = 2;
		} else if(clickedBox === 'yellow-field'){
			clickedBox = 3;
		} else if(clickedBox === 'blue-field'){
			clickedBox = 4;
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
			$('#score').html(score);
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


	
	
});
	
